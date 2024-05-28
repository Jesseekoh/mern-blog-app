<img src="./images/logo.sample.png" alt="Logo of the project" align="right">

# Mern-Blog-app &middot; [![Build Status](https://img.shields.io/travis/npm/npm/latest.svg?style=flat-square)](https://travis-ci.org/npm/npm) [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)
> A MERN stack blog app
## Authours
* [Jesseekoh](https://github.com/jesseekoh) 
* [Odey-Edward](https://github.com/Odey-Edward)


This is the final project my project partner and I decided to work on as the our portfolio project to mark our graduation from the [ALxSE program](https://alx.com).
It is a web app that allows users to create, edit and read blogposts. 

## Installing / Getting started

A quick introduction of the minimal setup you need to get a hello world up &
running.
Before running the script below, first head to the [mongodb install tutorial](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/) and install the latest version for your platform.

```shell

git clone https://github.com/jesseekoh/mern-blog-app.git
cd mern-blog-app/client
pnpm i
cd ../backend
pnpm i
pnpm dev # this starts the express server


# in a different terminal tab or window
cd mern-blog-app/client
pnpm dev # this starts the react app


```

Here you should say what actually happens when you execute the code above.

The first pnpm dev starts an express server running on port 8000 and the second pnpm dev starts a react app running on port 5173. If you successfully installed mongosh, the the DBClient should be connected on the default mongosh port which is 27017.
## Developing

### Built With
List main libraries, frameworks used including versions (React, Angular etc...)

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
cd mern-blog-app/
pnpm install
```

And state what happens step-by-step. If there is any virtual environment, local server or database feeder needed, explain here.

### Building

If your project needs some additional steps for the developer to build the
project after some code changes, state them here. for example:

```shell
./configure
make
make install
```

Here again you should state what actually happens when the code above gets
executed.


And again you'd need to tell what the previous code actually does.


## Configuration

Here you should write what are all of the configurations a user can enter when using the project.


## Style guide

Explain your code style and show how to check it.

## Api Reference

If the api is external, link to api documentation. If not describe your api including authentication methods as well as explaining all the endpoints with their required parameters.



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



## Licensing

State what the license is and how to find the text version of the license.
