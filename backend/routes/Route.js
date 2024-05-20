import {Login, SignUp} from '../controllers/AuthController.js'
import express from 'express'
import {getMe} from '../controllers/UserController.js'
import { verifyToken } from '../middlewares/AuthMiddleware.js'
const router = express.Router()

// Auth routes
router.post("/signup", SignUp)
router.post('/login', Login)



// get blogs
// get user profile
// 
router.get('/profile/:userId', verifyToken, getMe)
export default router
