import bcrypt from 'bcrypt';
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

userSchema.pre('save', async function() {
  this.password = await bcrypt.hash(this.password, 12);
});

const User = model('User', userSchema);

export default User;

