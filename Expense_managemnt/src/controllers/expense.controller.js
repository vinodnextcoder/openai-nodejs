const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { Expense } = require('../services');

const createExpense = catchAsync(async (req, res) => {
  const user = await Expense.createDept(req.body);
  res.status(httpStatus.CREATED).send(user);
});

module.exports = {
  createExpense
};
