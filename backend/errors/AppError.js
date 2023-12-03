module.exports = class AppError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status || 500;
    this.name = this.constructor.name;
  }
};

module.exports = class NetWorkError extends AppError {
  constructor(message, status) {
    super(message, status);
  }
};
