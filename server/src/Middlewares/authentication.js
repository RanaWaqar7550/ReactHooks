import { verifyToken } from 'Utils/jwtToken';

const getToken = (req) => {
  try {
    const bearer = req.headers.authorization;
    const queryToken = req.query.token;
    if (bearer && !bearer.startsWith('bearer')) {
      throw new Error();
    }
    const token = queryToken || (bearer.startsWith('bearer') && bearer.split('bearer ')[1]);
    if (!token) {
      throw new Error();
    }
    return token;
  } catch (error) {
    throw new Error();
  }
};

export const userIsLogin = (req, res, next) => {
  try {
    const token = getToken(req);
    const user = verifyToken(token);
    if (!user) {
      throw new Error('Invalid Token');
    }
    req.user = user;
    return next();
  } catch (error) {
    return res.status(401).json({
      error: true,
      message: error && error.message ? error.message : 'Invalid token',
      data: null,
      token: null,
    });
  }
};
