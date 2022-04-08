const express = require('express');
const router = express.Router();

router.use('/weather', require('./weather'));
// router.use('/geocoding', require('./geocoding'));

module.exports = router;