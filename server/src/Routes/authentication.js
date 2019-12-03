import express from 'express';

import { loginUser, registerUser } from 'Controllers';

export const authRouter = express.Router({
  mergeParams: true,
});

authRouter
  .route('/login')
  .post(loginUser);

authRouter
  .route('/signup')
  .post(registerUser);
