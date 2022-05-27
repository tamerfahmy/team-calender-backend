const express = require('express');
const router = express.Router();
const dateTimeController = require('../controllers/datetime.controller');

// Add dateTime controller routes to express router
router.get('/', dateTimeController.get);
  
module.exports = router;