import User from '../models/UserModel.js';
import { createSecretToken } from '../utils/SecretToken.js';
import bcrypt from 'bcrypt';
import { config } from 'dotenv';
import jwt from 'jsonwebtoken';
config();

/**
 * Autheticates a user using credentials stored in cookie
 * @param {*} req Express Request object
 * @param {*} res Express Response object
 * @returns
 */
export const verifyUserWithCookie = async (req, res) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(
    token,
    process.env.TOKEN_KEY || 'abcdefghijklmnopqrstuvwxyx',
    (err, data) => {
      if (err) {
        res.clearCookie('token');
        return res
          .status(403)
          .json({ message: 'Failed to authenticate token' });
      }

      res.status(200).json({
        success: true,
        message: 'User authorized',
        data: { id: data.id, username: data.username },
      });
    }
  );
};

/**
 * Handles signing up a user
 * @param {*} req Express Request object
 * @param {*} res Express Response object
 * @param {*} next Next middleware
 * @returns
 */
export const signup = async (req, res, next) => {
  try {
    const { email, password, username, bio, country, createdAt } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(403).json({ message: 'User already exists' });
    }

    const user = await User.create({
      email,
      password,
      username,
      createdAt,
      bio,
      country,
    });

    const token = createSecretToken(user._id, user.username);

    res.cookie('token', token, {
      withCredentials: true,
      httpOnly: false,
    });
    // const
    res.status(201).json({
      message: 'User signed in successfully',
      success: true,
      data: { username: user.username, id: user._id },
    });

    next();
  } catch (err) {
    console.error(err);
  }
};

/**
 * Handles logging in a user
 * @param {*} req Express Request object
 * @param {*} res Express Response object
 * @param {*} next
 * @returns response with a status code of 401 or 404 on error and
 * 201 on success
 */
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({ message: 'All fields are required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ message: 'User with this email address not found' });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.status(401).json({ message: 'Incorrect password or email' });
    }

    const token = createSecretToken(user._id, user.username);
    res.cookie('token', token, {
      withCredentials: true,
      httpOnly: false,
    });
    res.status(201).json({
      success: true,
      message: 'User logged in successfully',
      data: { username: user.username, id: user._id },
    });
  } catch (err) {
    console.error(err);
  }
};

/**
 * Logs out a user
 * @param {*} req
 * @param {*} res
 */
export const logout = async (req, res) => {
  // Clear the cookie named 'token'
  res.clearCookie('token', { path: '/' });

  // Send the response confirming logout
  return res.status(200).json({ message: 'Successfully logged out' });
};

