const validation = require('./validation');

describe('validation middleware', () => {
  let req, res, next;

  beforeEach(() => {
    req = {
      query: {},
    };
    res = {};
    next = jest.fn();
  });

  test('should pass validation for a valid name', () => {
    req.query.name = 'John';

    validation()(req, res, next);
    expect(req.name).toBe('John');
    expect(next).toHaveBeenCalled();
  });

  test('should fail validation for a number', () => {
    req.query.name = '123';

    validation()(req, res, next);

    expect(next).toHaveBeenCalledWith('This is not a name: 123');
  });

});
