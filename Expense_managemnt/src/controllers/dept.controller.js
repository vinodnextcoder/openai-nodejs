const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { deptService } = require('../services');

const createDept = catchAsync(async (req, res) => {
  const user = await deptService.createDept(req.body);
  res.status(httpStatus.CREATED).send(user);
});

module.exports = {
  createDept
};
