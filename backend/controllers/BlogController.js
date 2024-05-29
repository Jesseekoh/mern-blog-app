import Blog from '../models/BlogModel.js';

import { ObjectId } from 'mongodb';

export const createBlogPost = async (req, res) => {
  // console.log(req.currentUser)
  const { title, content } = req.body;

  const author = req.currentUser.id;

  const blog = await Blog.create({ title, content, author });

  if (!blog) {
    res.status(403).json({ error: 'Failed to create document' });
  }
  res.status(200).json(blog);
};

/**
 * Edit blog post
 * @param {*} req
 * @param {*} res
 */
export const editPost = async (req, res) => {
  const { currentUser } = req;
  const { blogId } = req.params;
  if (currentUser) {
    console.log(currentUser);
    try {
      const blog = await Blog.findOne({ _id: blogId });
      console.log(blog);
      if (!blog) {
        return res.status(404).json({ message: 'Post not found' });
      }
      if (blog.author == currentUser.id) {
        // Todo figure out updating documents in mongoose
        return res
          .status(200)
          .json({ success: true, message: 'You can edit this file' });
      }
      return res.status(403).json({ message: 'Unauthorized' });
    } catch (error) {
      console.log(error);
    }
  }

  return res.status(403).json({ message: 'Unauthorized' });
};

/**
 * Delete post
 * @param {*} req
 * @param {*} res
 */
export const deletePost = async (req, res) => {
  const { currentUser } = req;
  const { blogId } = req.params;
  if (currentUser) {
    console.log(currentUser);
    try {
      const blog = await Blog.findOne({ _id: blogId });
      console.log(blog);
      if (!blog) {
        return res.status(404).json({ message: 'Post not found' });
      }
      if (blog.author == currentUser.id) {
        const post = await Blog.deleteOne({ _id: blogId });
        console.log(post);
        return res
          .status(200)
          .json({ success: true, message: 'Blog successfully deleted' });
      }
      return res.status(403).json({ message: 'Unauthorized' });
    } catch (error) {
      console.log(error);
    }
  }

  return res.status(403).json({ message: 'Unauthorized' });
};
/**
 * Retrieves a single blog post from the Id in the URL
 * @param {*} req Express request object
 * @param {*} res Express response object
 * @returns
 */
export const getBlog = async (req, res) => {
  const { blogId } = req.params;

  const blog = await Blog.findOne({ _id: blogId });

  if (!blog) {
    return res.status(404).json({ error: 'Document not found' });
  }

  return res.status(200).json({ success: true, data: blog });
};

/**
 * Fetches blog posts for the users feed
 * @param {*} req
 * @param {*} res
 */
export const getAllBlogs = async (req, res) => {
  const blogs = await Blog.find();

  if (!blogs) {
    return res.status(404).json({ error: 'No Documents found' });
  }

  // res.json({message: 'Yo, it works'})
  return res.status(200).json({ success: true, data: blogs });
};

export const getUserBlog = async (req, res) => {
  const author = new ObjectId(req.params.id);

  const blogs = await Blog.find({ author });

  if (!blogs) {
    return res.status(404).json({ error: 'No Documents found' });
  }

  return res.status(200).json({ success: true, data: blogs });
};
