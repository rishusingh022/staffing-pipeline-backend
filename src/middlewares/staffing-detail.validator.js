const Joi = require('Joi');

const uuidType = Joi.string().uuid({
  version: ['uuidv4', 'uuidv1'],
});

const bodySchema = Joi.object({
  fmno: Joi.number().required(),
  name: Joi.string().required(),
  userId: uuidType.required(),
  engagementId: uuidType.required(),
  assignmentType: Joi.string(),
  study: Joi.string().required(),
  utilizationPercentage: Joi.number().required(),
  staffingStatus: Joi.string().required(),
  assignmentStartDate: Joi.date().required(),
  assignmentEndDate: Joi.date().required(),
  APName: Joi.string(),
  EDName: Joi.string(),
  EMName: Joi.string(),
  staffingManager: Joi.string(),
  guild: Joi.string().required(),
  country: Joi.string().required(),
  departmentCode: Joi.string().required(),
  role: Joi.string().required(),
  practice: Joi.string(),
  departmentName: Joi.string().required(),
  integrated: Joi.string(),
  email: Joi.string().required(),
  path: Joi.string(),
  practiceFunction: Joi.string(),
  practiceIndustry: Joi.string(),
  region: Joi.string().required(),
  roleCategory: Joi.string().required(),
  roleSubCategory: Joi.string().required(),
  staffingOffice: Joi.string().required(),
});

const validator = (req, res, next) => {
  const { error } = bodySchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  } else {
    next();
  }
};

module.exports = validator;
