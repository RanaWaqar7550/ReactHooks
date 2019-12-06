import jwt from 'jsonwebtoken';

export const createToken = ({ email, username }) => jwt.sign({ email, username }, 'secret', { expiresIn: '1h' });

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, 'secret');
  } catch (error) {
    throw error.message;
  }
};
