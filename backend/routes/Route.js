import {login, signup, logout, verifyUserWithCookie} from '../controllers/AuthController.js'
import express from 'express'
import {getMe} from '../controllers/UserController.js'
import { verifyToken } from '../middlewares/AuthMiddleware.js'
import { createBlogPost, getAllBlogs, getBlog } from '../controllers/BlogController.js'
const router = express.Router()

// Auth routes
router.post("/signup", signup)
router.post('/login', login)
router.get('/logout', logout)
// verifies user with cookie without credentials
router.get('/verify-user-with-cookie', verifyUserWithCookie);



// get blogs
// get user profile
router.get('/profile/:userId', verifyToken, getMe)


// TODO: create route for editing blog post



// Blog routes
// create post
router.post('/blog/create', verifyToken, createBlogPost)
// get all blog posts
router.get('/blogs/all', getAllBlogs)
// fetch post
router.get('/blogs/post/:blogId', getBlog)

export default router
