import {
  login,
  signup,
  logout,
  verifyUserWithCookie,
} from '../controllers/AuthController.js';
import express from 'express';
import { getMe, getProfile } from '../controllers/UserController.js';
import { verifyToken } from '../middlewares/AuthMiddleware.js';
import {
  createBlogPost,
  deletePost,
  editPost,
  getAllBlogs,
  getBlog,
  getUserBlog
} from '../controllers/BlogController.js';
const router = express.Router();

// Auth routes
router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logout);
// verifies user with cookie without credentials
router.get('/verify-user-with-cookie', verifyUserWithCookie);

// get blogs
// get user profile
router.get('/myProfile', verifyToken, getMe);
router.get('/profile/:profileId', getProfile);

// TODO: create route for editing blog post

// Blog routes
// create post
router.post('/blogs/create', verifyToken, createBlogPost);
// get all blog posts
router.get('/blogs/all', getAllBlogs);
// edit post
router.put('/blogs/post/:blogId', verifyToken, editPost);
// delete post
router.delete('/blogs/post/:blogId', verifyToken, deletePost);
// fetch post
router.get('/blogs/post/:blogId', getBlog);

// get all user blog post
router.get('/blogs/user/:id', getUserBlog)

export default router
