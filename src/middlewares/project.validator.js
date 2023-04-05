const Joi = require('joi');
const { HttpError } = require('../utils/httpError');

const projectSchema = Joi.object({
  name: Joi.string().min(3).max(30),
  tags: Joi.array().items(Joi.string()),
  skills: Joi.array().items(Joi.string()),
  guild: Joi.string(),
  userIds: Joi.array().items(Joi.string()),
  caseStudyIds: Joi.array().items(Joi.string()),
  status: Joi.string().min(3).max(30),
  startDate: Joi.date(),
  endDate: Joi.date(),
  sectorId: Joi.string(),
  subSectorId: Joi.string(),
  // uppercase alphanumeric string of characters
  chargeCode: Joi.string().regex(/^[A-Z0-9]+$/),
  image: Joi.string().min(3),
});

const validateProject = (req, res, next) => {
  try {
    const { error } = projectSchema.validate(req.body);
    if (error) {
      throw new HttpError(error.message, 400);
    }
    const startDate = new Date(req.body.startDate).getTime();
    const endDate = new Date(req.body.endDate).getTime();
    if (startDate >= endDate) {
      throw new HttpError('Start date cannot be after end date', 400);
    }
    next();
  } catch (error) {
    if (error instanceof HttpError) {
      res.status(error.statusCode).json({
        error: error.message,
        user: req.user,
      });
    } else {
      res.status(500).json({
        error: 'Internal Server Error',
        user: req.user,
      });
    }
  }
};

module.exports = { validateProject };
