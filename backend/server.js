import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './routes/Route.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 8000;
const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/mern_blog';
// const {PORT, DB_URI} = process.env
const app = express();

mongoose
  .connect(DB_URI, {})
  .then(() => console.log('MongoDB is connected successfully'))
  .catch((err) => console.log(err));

app.use(
  cors({
    credentials: true,
    origin: [
      'http://localhost:3000',
      'http://localhost:8000',
      'http://localhost:5173',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());
app.use(cookieParser());

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
