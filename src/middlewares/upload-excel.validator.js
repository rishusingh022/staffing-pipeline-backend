const Joi = require('joi');
const schema = Joi.object({
  fieldname: Joi.string().required(),
  originalname: Joi.string().required(),
  encoding: Joi.string().required(),
  mimetype: Joi.string().required(),
  destination: Joi.string().required(),
  filename: Joi.string().required(),
  path: Joi.string().required(),
  size: Joi.number().required(),
});

const validate = (req, res, next) => {
  console.log(req);
  if (!req['file']) {
    res.status(400);
    res.json({ message: 'File is required' });
  } else {
    next();
  }
};

const fileValidator = (req, res, next) => {
  const { error } = schema.validate(req['file']);
  if (error) {
    res.status(400);
    res.json({ message: error.message });
  } else {
    next();
  }
};

module.exports = { validate, fileValidator };
