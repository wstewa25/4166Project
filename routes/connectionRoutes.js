const express = require('express');
const controller = require('../controllers/connectionController');
const { isLoggedIn, isAuthor } = require('../middlewares/auth');
const { validateId } = require('../middlewares/validator');

const router = express.Router();

//GET /connections: sends the connections page
router.get('/', (controller.index));

//GET /connections/new: send form for creating a new connection
router.get('/new', isLoggedIn, (controller.new));

//POST /connections: create a new connection
router.post('/', isLoggedIn, (controller.create));

//GET /connections/:id: send details of connection identified by id
router.get('/:id', validateId, (controller.show));

//GET /connections/:id/edit: send form for editing an existing connection
router.get('/:id/edit', isLoggedIn, isAuthor,  validateId, (controller.edit));

//PUT /connections/:id: update connection identified by id
router.put('/:id', isLoggedIn, isAuthor,  validateId, (controller.update));

//DELETE /connections/:id: delete connection identified by id
router.delete('/:id', isLoggedIn, isAuthor,  validateId, (controller.delete));

module.exports = router;