const httpStatus = require('http-status');
const { Dept } = require('../models');

/**
 * Create a user
 * @param {Object} deptBody
 * @returns {Promise<User>}
 */
const createDept = async (deptBody) => {
  return Dept.create(deptBody);
};


module.exports = {
  createDept
};
