const joi = require('joi');
const createBodySchema = joi.object({
  area: joi.string().required(),
  category: joi.string().required(),
  skill: joi.string().required(),
});

const deleteBodySchema = joi
  .object({
    skillId: joi.string().uuid().required(),
  })
  .required();
const deleteParamSchema = joi
  .object({
    id: joi.string().uuid().required(),
  })
  .required();
const validate = (req, res, next) => {
  const { error } = createBodySchema.validate(req.body);
  if (error) {
    res.status(400).json({
      error: error.message,
    });
  } else {
    next();
  }
};
const deleteValidator = (schema, key) => (req, res, next) => {
  const { error } = schema.validate(req[key]);
  if (error) {
    res.status(400).json({
      error: error.message,
    });
  } else {
    next();
  }
};

module.exports = { validate, deleteValidator, deleteBodySchema, deleteParamSchema };
