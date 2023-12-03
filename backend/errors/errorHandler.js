const AppError = require("./AppError");

const errorHandler = (err, req, res, next) => {
  const status = err.statusCode || 500;
  const message = err.message || "an unknown error occured";
  if (err instanceof AppError) {
    return res.status(status).json({
      success: false,
      status,
      message,
      stack: process.env.NODE_ENV !== "development" ? {} : err.stack,
    });
  }
  next(err);
};

module.exports = errorHandler;
