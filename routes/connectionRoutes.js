const express = require('express');
const {body} = require('express-validator');
const controller = require('../controllers/connectionController');
const { isLoggedIn, isAuthor, isNotAuthor } = require('../middlewares/auth');
const { validateId, validateRsvp, validateResult, validateConnection } = require('../middlewares/validator');

const router = express.Router();

//GET /connections: sends the connections page
router.get('/', (controller.index));

//GET /connections/new: send form for creating a new connection
router.get('/new', isLoggedIn, (controller.new));

//POST /connections: create a new connection
router.post('/', isLoggedIn, validateConnection, validateResult, (controller.create));

//GET /connections/:id: send details of connection identified by id
router.get('/:id', validateId, (controller.show));

//GET /connections/:id/edit: send form for editing an existing connection
router.get('/:id/edit', validateId, isLoggedIn, isAuthor, (controller.edit));

//PUT /connections/:id: update connection identified by id
router.put('/:id', validateId, isLoggedIn, isAuthor, validateConnection, validateResult, (controller.update));

//DELETE /connections/:id: delete connection identified by id
router.delete('/:id', validateId, isLoggedIn, isAuthor, (controller.delete));

//POST RSVP to connection
router.post('/:id/rsvp', validateId, isLoggedIn, isNotAuthor, validateRsvp, validateResult, (controller.rsvp));

//Delete RSVP
router.delete('/:id/rsvp', validateId, isLoggedIn, (controller.deleteRsvp));

module.exports = router;