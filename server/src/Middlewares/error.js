// eslint-disable-next-line no-unused-vars
export const errorMiddleware = (error, req, res, next) => {
  const { err, statusCode } = error;
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
  return res.status(statusCode).json(errorResult);
};
