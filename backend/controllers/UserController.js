import jwt from "jsonwebtoken"
import mongoose from "mongoose"
import User from "../models/UserModel.js"

/**
 * Gets the profile of the user currently in session
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const getMe = async (req, res) => {
  // const {token} = req.cookie

  // if (token) {

  const {currentUser} = req

  const {userId} = req.params

  console.log(userId, 'UserId')
  console.log(currentUser, 'CurrentUser')




  // get userInfo
  const userInfo = await User.findOne({_id: userId})

  if (!userInfo) {
    return res.status(404).json({message: 'User profile not found'})
  }
 // Todo: Edit return json to not include sensitive info like password
  return res.status(200).json({message: 'success', data: userInfo})
  console.log(userInfo)
  

    console.log(userId, 'Usercontroller')
  // }
  
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
export const getUser = async (req, res) => {}
