class HTTPError extends Error {
  constructor(message, status) {
    super(message);
    this.message = message;
    this.status = status;
  }
}

class BadInputError extends HTTPError {
  constructor(message) {
    super(message, 400);
  }
}
class NotFoundError extends HTTPError {
  constructor(message) {
    super(message, 404);
  }
}

module.exports = { HTTPError, BadInputError, NotFoundError };
