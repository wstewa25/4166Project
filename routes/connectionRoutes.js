const express = require('express');
const controller = require('../controllers/connectionController');

const router = express.Router();

//GET /connections: sends the connections page
router.get('/', (controller.index));

//GET /connections/new: send form for creating a new connection
router.get('/new', (controller.new));

//POST /connections: create a new connection
router.post('/', (controller.create));

//GET /connections/:id: send details of connection identified by id
router.get('/:id', (controller.show));

//GET /connections/:id/edit: send form for editing an existing connection
router.get('/:id/edit', (controller.edit));

//PUT /connections/:id: update connection identified by id
router.put('/:id', (controller.update));

//DELETE /connections/:id: delete connection identified by id
router.delete('/:id', (controller.delete));

module.exports = router;