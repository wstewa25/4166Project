const express = require('express');
const controller = require('../controllers/standardController');

const router = express.Router();

//GET / sends the index page
router.get('/', (controller.index));

//GET /about sends the about page
router.get('/about', (controller.about));

//GET /contact sends the contact page
router.get('/contact', (controller.contact));

module.exports = router;