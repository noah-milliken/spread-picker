class BadRequest extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
    this.name = "BadREquestError";
  }
}

class DatabaseError extends Error {
  constructor(message, code) {
    super(message);
    this.status = 500;
    this.name = "DatabaseError";
    this.code = code;
  }
}
module.exports = { BadRequest, DatabaseError };
