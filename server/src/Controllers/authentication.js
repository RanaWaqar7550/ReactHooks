import httpStatus from 'http-status';

import { isValidateEmail } from 'Utils';
import { createUser, isUserExists, userLoginAuthentication } from 'Models';

export const loginUser = async (req, res, next) => {
  const {
    email,
    password,
  } = req.body;
  if (!isValidateEmail(email)) {
    return next({ err: 'Please write valid email address.', statusCode: httpStatus.BAD_REQUEST });
  }
  try {
    const user = await userLoginAuthentication({ email, password });
    return res.status(httpStatus.OK).json({
      error: false,
      message: 'User logged in successfully',
      data: user,
    });
  } catch (err) {
    return next({ err, statusCode: httpStatus.UNAUTHORIZED });
  }
};

export const registerUser = async (req, res, next) => {
  const {
    email,
  } = req.body;
  if (!isValidateEmail(email)) {
    return next({ err: 'Please write valid email address.', statusCode: httpStatus.BAD_REQUEST });
  }
  try {
    await isUserExists(req.body);
    const { ops: createdUser } = await createUser(req.body);
    const [userData] = createdUser;
    return res.status(httpStatus.OK).json({
      error: false,
      message: 'user created successfully',
      data: userData,
    });
  } catch (err) {
    return next({ err, statusCode: httpStatus.UNAUTHORIZED });
  }
};
