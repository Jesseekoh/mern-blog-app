import User from "../models/UserModel.js";
import { config } from "dotenv";
config()
import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
  const {token} = req.cookies
  if (!token){
    return res.status(401).json({message: 'No token provided'})
  }

  jwt.verify(token, process.env.TOKEN_KEY, (err, data) => {
    if (err){
      return res.status(403).json({message: 'Failed to authenticate token'})
    }
    req.currentUser = data
    
    next()
  })
}
