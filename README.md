<img src="./images/logo.sample.png" alt="Logo of the project" align="right">

# Mern-Blog-app &middot; [![Build Status](https://img.shields.io/travis/npm/npm/latest.svg?style=flat-square)](https://travis-ci.org/npm/npm) [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)
> A MERN stack blog app
## Authours
* [Odey-Edward](https://github.com/Odey-Edward)
* [Jesseekoh](https://github.com/jesseekoh) 


This is the final project my project partner and I decided to work on as the our portfolio project to mark our graduation from the [ALxSE program](https://alx.com).
It is a web app that allows users to create, edit and read blogposts. 

## Installing / Getting started

A quick introduction of the minimal setup you need to get a hello world up &
running.
Before running the script below, first head to the [mongodb install tutorial](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/) and install the latest version for your platform.

```shell

git clone https://github.com/jesseekoh/mern-blog-app.git
cd mern-blog-app/blog
pnpm i
cd ../backend
pnpm i
pnpm dev # this starts the express server


# in a different terminal tab or window
cd mern-blog-app/blog
pnpm dev # this starts the react app


```

The first pnpm dev starts an express server running on port 8000 and the second pnpm dev starts a react app running on port 5173. If you successfully installed mongosh, the the DBClient should be connected on the default mongosh port which is 27017.
## Developing

### Built With
* [React](https://react.dev)
* [Express](https://expressjs.com)
* [MongoDB](https://mongodb.com)
* [NodeJs](https://nodejs.org)
* [Mongoose](https://mongoosejs.com)  


### Prerequisites
What is needed to set up the dev environment. For instance, global dependencies or any other tools. include download links.
Here are tools needed to setup the dev environment
* [NodeJS](https://nodejs.org)
* [Mongodb](https://mongodb.com)


### Setting up Dev

Here's a brief intro about what a developer must do in order to start developing
the project further:

```shell
git clone https://github.com/jesseekoh/mern-blog-app.git
cd mern-blog-app/blog
pnpm install
cd ../backend
pnpm install
```


## Configuration

Here you should write what are all of the configurations a user can enter when using the project.


## Style guide

Explain your code style and show how to check it.

## Api Reference


**POST** /signup - The signup route accepts an email, username, bio, country, and password. Upon signup a token is stored in the cookie    

**POST** /login - The login route accepts an email and a password. Upon login a token is stored in the cookie.  

**GET** /logout - this invalidates the token by setting it to a null string.  

**GET** /verify-user-with-cookie - this removes the need for the user to always login. As long as there is a valid token stored in the cookie, the server decodes the token and checks it against the User Database. If the user is valid it sends the user's name, email and id which the frontend then uses to update state.  


**GET** /myProfile - returns details of the currently signed in user.  

**GET** /profile/:profileId - returns the info of the user with profileId. It returns and error message with status code 404 if the user is not found.  

**GET** /blogs/post/:blogId Get a blogpost with and id of blogId.  

**DELETE** /blogs/post/:blogId Deletes a blogpost with and id of blogId.  

**POST** /blogs/create - this accepts a blog title, and a blog content. Only authenticated users can create blog post.  

**PUT** /blogs/post/:blogId - this edits an existing blog post. If a blog with blogId does not exist it returns a message with a status code of 404. 

**GET** /blogs/all - this returns all blogs to display on the blog feed.  





## Database

For this project we made use of MongoDB v7.0.9
Explaining what database (and version) has been used. Provide download links.
[Mongodb](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/).

```js
// UserSchema
import { Schema, model }  from 'mongoose';

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Your email address is required'],
    unique: true,
  },
  username: {
    type: String,
    required: [true, 'Your username is required'],
    unique: true
  },
  bio: {
    type: String,
    default: 'No bio....'
  },
  country: {
    type: String,
    required: [true, 'Please enter your Country']
  },
  password: {
    type: String,
    required: [true, 'Your password is required'],
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
});

// Blog Schema
const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  views: {
    type: Number,
    default: 0,
  },
  likes: {
    type: Number,
    default: 0,
  },
});
```



## Features yet to implement
* Blog view count - Increase blog view count if the user fetching the blog is not the author of the blog

* Following authors

* Comments system

* Reactions e.g Like 

* uploading blog header images

* Ability to change account details like username, password and also profile picture

