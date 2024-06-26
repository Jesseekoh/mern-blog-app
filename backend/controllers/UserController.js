import jwt from 'jsonwebtoken';
import Blog from '../models/BlogModel.js';
import mongoose from 'mongoose';
import User from '../models/UserModel.js';
import { ObjectId } from 'mongodb';

/**
 * Gets the profile of the user currently in session
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const getMe = async (req, res) => {
  // const {token} = req.cookie

  // if (token) {

  const { currentUser } = req;

  const { userId } = req.params;

  /*console.log(userId, 'UserId');
  console.log(currentUser, 'CurrentUser');
  */
  if (currentUser) {
    const { iat, exp, ...value } = currentUser;
    const blogs = await Blog.find({ author: new ObjectId(value.id) });

    value.totalPost = blogs.length;

    return res
    .status(200)
    .json({ message: 'success', data: value })
  }

  // get userInfo
  const userInfo = await User.findOne({ _id: userId });

  if (!userInfo) {
    return res.status(404).json({ message: 'User profile not found' });
  }
  // Todo: Edit return json to not include sensitive info like password

  const { id, username, email } = userInfo;
  return res
    .status(200)
    .json({ message: 'success', data: { id, username, email } });
};

export const getProfile = async (req, res) => {
  const { profileId } = req.params;

  // get userInfo
  //console.log(profileId);
  const userInfo = await User.findOne({ _id: profileId });

  if (!userInfo) {
    return res.status(404).json({ message: 'User profile not found' });
  }
  // Todo: Edit return json to not include sensitive info like password

  const { id, username, email, bio, country } = userInfo;

  const blogs = await Blog.find({ author: new ObjectId(id) });
  const totalPost = blogs.length;

  return res
    .status(200)
    .json({ message: 'success', data: { id, username, email, bio, country, totalPost } });
};
