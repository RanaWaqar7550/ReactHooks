import express from 'express';

export const userRouter = express.Router({
  mergeParams: true,
});

userRouter
  .route('/')
  .get((req, res) => res.send('working'));
