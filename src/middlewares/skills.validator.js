const joi = require('joi');
const schema = joi.object({
  area: joi.string().required(),
  category: joi.string().required(),
  skill: joi.string().required(),
});

const validate = (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    res.status(400).json({
      error: error.message,
    });
  } else {
    next();
  }
};

module.exports = { validate };
