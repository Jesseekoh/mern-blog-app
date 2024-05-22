import jwt from 'jsonwebtoken';

export const createSecretToken = (id, username) => {
  return jwt.sign({id, username}, process.env.TOKEN_KEY, {expiresIn: 3 * 24 * 60 * 60});
};


