const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const deptController = require('../../controllers/dept.controller');


const router = express.Router();
router
  .route('/')
  .post(auth('manageUsers'),  deptController.createDept);

  

  
  module.exports = router;