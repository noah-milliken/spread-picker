const expect = require("chai").expect;
const httpMocks = require("node-mocks-http");
const { BadRequest, DatabaseError } = require("../errors/Errors");
const errorHandler = require("../errors/errorHandler");

describe("Error handler test", () => {
  const req = httpMocks.createRequest();
  const res = httpMocks.createResponse();
  const next = () => {};
  it("Should return 400 if passed a badRequest error", function () {
    const badRequestError = new BadRequest("test request");
    errorHandler(badRequestError, req, res, next);

    expect(res._isEndCalled()).to.be.true;
    expect(res.statusCode).to.equal(400);
  });
  it("Should return 500 if passed databaseError", function () {
    const databaseError = new DatabaseError("test database");
    errorHandler(databaseError, req, res, next);
    expect(res.statusCode).to.equal(500);
  });
});
