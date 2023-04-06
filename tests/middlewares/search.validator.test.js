const searchValidator = require('../../src/middlewares/search.validator');

describe('Search Validator', () => {
  test('should call next if the query is given', () => {
    const req = {
      query: {
        name: 'gsdfgs',
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next = jest.fn();
    searchValidator.validateSeachQuery(req, res, next);
    expect(next).toBeCalled();
  });
  test('should return error if search query is not a string', () => {
    const req = {
      query: {
        name: 123,
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next = jest.fn();
    searchValidator.validateSeachQuery(req, res, next);
    expect(res.json).toBeCalledWith({ message: '"name" must be a string' });
  });
  test('should return error if search query is less than 1 character', () => {
    const req = {
      query: {
        name: '',
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next = jest.fn();
    searchValidator.validateSeachQuery(req, res, next);
    expect(res.json).toBeCalledWith({ message: '"name" is not allowed to be empty' });
  });
  it('it should throw an error', () => {
    jest.spyOn(searchValidator.querySchema, 'validate').mockImplementation(() => {
      throw new Error('error');
    });
    const req = {
      query: {
        name: 'gsdfgs',
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next = jest.fn();
    searchValidator.validateSeachQuery(req, res, next);
    expect(res.status).toBeCalledWith(500);
    expect(res.json).toBeCalledWith({ message: 'error' });
  });
});
