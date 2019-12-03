import express from 'express';

import { userRouter } from './users';
import { authRouter } from './authentication';

export const rootRouter = express.Router({
  mergeParams: true,
});

rootRouter.use('/auth', authRouter);
rootRouter.use('/users', userRouter);
