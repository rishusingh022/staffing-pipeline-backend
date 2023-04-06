const Joi = require('joi');

const querySchema = Joi.object({
  name: Joi.string().min(1).max(30).required(),
});

const validateSeachQuery = (req, res, next) => {
  try {
    const { error } = querySchema.validate(req.query);
    if (error) {
      res.status(400).json({ message: error.message });
    } else {
      next();
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { validateSeachQuery, querySchema };
