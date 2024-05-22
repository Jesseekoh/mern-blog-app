import User from '../models/UserModel.js';
import { createSecretToken } from '../utils/SecretToken.js';
import bcrypt from 'bcrypt';
import { config } from 'dotenv';
import jwt from 'jsonwebtoken'
config()



export const verifyUserWithCookie = async (req, res) => {
  const {token} = req.cookies
  if (!token){
    return res.status(401).json({message: 'No token provided'})
  }

  jwt.verify(token, process.env.TOKEN_KEY, (err, data) => {
    if (err){
      return res.status(403).json({message: 'Failed to authenticate token'})
    }

    res.status(200).json({success: true, message: 'User authorized', data: {id: data.id, username: data.username}})
  })

}


export const signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(403).json({ message: 'User already exists' });
    }

    const user = await User.create({
      email,
      password,
      username,
      createdAt,
    });

    const token = createSecretToken(user._id);

    res.cookie('token', token, {
      withCredentials: true,
      httpOnly: false,
    });

    res
      .status(201)
      .json({ message: 'User signed in successfully', success: true, user });

    next();
  } catch (err) {
    console.error(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({ message: 'All fields are required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User with this email address not found' });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res
        .status(401)
        .json({ message: 'Incorrect password or email' });
    }
    
    const token = createSecretToken(user._id, user.username)
    res.cookie('token', token, {
      withCredentials: true,
      httpOnly: false
    })
    res.status(201).json({success: true, message: 'User logged in successfully', data: {username: user.username, id: user._id}})
  } catch (err) {
    console.error(err);
  }
};

export const logout = async (req, res) => {
  res.clearCookie('token')
  res.status(200).cookie('token', '').json({message: 'Successfully logged out'})

}
