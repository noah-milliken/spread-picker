const { BadRequest, DatabaseError } = require("./Errors");

const errorHandler = (err, req, res, next) => {
  console.log(`Error: ${err.message}`);
  const status = err.status || 500;
  const message = err.message || "an unknown error occured";
  if (err instanceof BadRequest) {
    return res.status(status).json({
      success: false,
      status,
      message,
    });
  }
  if (err instanceof DatabaseError) {
    return res.status(status).json({
      success: false,
      status,
      message,
    });
  }
  //generic 500 error res.status()
};

module.exports = errorHandler;
