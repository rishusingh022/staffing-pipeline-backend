const express = require('express');
const staffingRouter = express.Router();
const authMiddlewares = require('../middlewares/request.validator');
const staffingDetailsController = require('../controllers/staffing-details.controller');
const validator = require('../middlewares/staffing-detail.validator');

staffingRouter.post('/', authMiddlewares.reqAuthValidator, validator, staffingDetailsController.createStaffingEntry);

module.exports = staffingRouter;
