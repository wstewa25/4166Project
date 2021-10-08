const express = require('express');
const controller2 = require('../controllers/standardController');

const router2 = express.Router();

router2.get('/', (controller2.index));

router2.get('/about', (controller2.about));

router2.get('/contact', (controller2.contact));


module.exports = router2;