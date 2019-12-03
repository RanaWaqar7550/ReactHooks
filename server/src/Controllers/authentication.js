import { isValidateEmail } from 'Utils';
import { createUser, isUserExists, userLoginAuthentication } from 'Models';

export const loginUser = async (req, res, next) => {
  const {
    email,
    password,
  } = req.body;
  console.log(req.body);
  if (!isValidateEmail(email)) {
    return next('Please write valid email address.');
  }
  try {
    const user = await userLoginAuthentication({ email, password });
    return res.status(200).json(user);
  } catch (err) {
    return next(err);
  }
};

export const registerUser = async (req, res, next) => {
  const {
    email,
  } = req.body;
  if (!isValidateEmail(email)) {
    return next('Please write valid email address.');
  }
  try {
    await isUserExists(req.body);
    await createUser(req.body);
    return res.json({
      message: 'user created successfully',
    });
  } catch (err) {
    return next(err);
  }
};
