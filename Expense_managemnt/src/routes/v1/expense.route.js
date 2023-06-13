const express = require('express');
const auth = require('../../middlewares/auth');
const deptController = require('../../controllers/dept.controller');


const router = express.Router();
router
  .route('/')
  .post(auth('manageUsers'),  deptController.createDept)
  // .get(auth('getUsers'), validate(userValidation.getUsers), userController.getUsers);
  module.exports = router;