import User from '../models/UserModel.js';
import { createSecretToken } from '../utils/SecretToken.js';
import bcrypt from 'bcrypt';

export const SignUp = async (req, res, next) => {
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

export const Login = async (req, res, next) => {
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
    
    const token = createSecretToken(user._id)
    res.cookie('token', token, {
      withCredentials: true,
      httpOnly: false
    })
    res.status(201).json({success: true, message: 'User logged in successfully'})
  } catch (err) {
    console.error(err);
  }
};
