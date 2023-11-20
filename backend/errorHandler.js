const errorHandler = (err, req, res, next) => {
  const status = err.statusCode || 500;
  const message = err.message || "an unknown error occured";
  return res.status(status).json({
    success: false,
    status,
    message,
    stack: process.env.NODE_ENV !== "development" ? {} : err.stack,
  });
};

module.exports = errorHandler;
