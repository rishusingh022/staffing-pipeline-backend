const express = require('express');
const staffingRouter = express.Router();
const authMiddlewares = require('../middlewares/request.validator');
const staffingDetailsController = require('../controllers/staffing-details.controller');

staffingRouter.post('/', authMiddlewares.reqAuthValidator, staffingDetailsController.createStaffingEntry);

module.exports = staffingRouter;
