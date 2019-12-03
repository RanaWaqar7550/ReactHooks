// eslint-disable-next-line no-unused-vars
export const errorMiddleware = (err, req, res, next) => {
  const errorResult = {
    error: true,
    message: '',
    data: null,
  };
  if (toString.call(err) === '[object Object]') {
    errorResult.message = err.message;
  } else {
    errorResult.message = err;
  }
  return res.status(401).json(errorResult);
};
