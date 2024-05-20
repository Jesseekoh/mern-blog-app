import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import router from './routes/Route.js'
import mongoose from 'mongoose'
import { verifyToken } from './middlewares/AuthMiddleware.js'

const {PORT, DB_URI} = process.env
const app = express()

mongoose
  .connect(DB_URI, {})
  .then(() => console.log('MongoDB is connected successfully'))
  .catch((err) => console.log(err))


app.use(cors({
  // credentials: true,
  // origin: ['http://localhost:8000'],
  // methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

app.use(cookieParser())
app.use(express.json())

app.use('/', router)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
