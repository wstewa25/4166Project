const model = require('../models/connection');

//GET /connections sends the connections page
exports.index = (req, res, next) => {
    model.find()
        .then(connections => res.render('./connection/connections', { connections }))
        .catch(err => next(err));
};

//GET /connections/new: send html form for creating a new connection
exports.new = (req, res) => {
    res.render('./connection/new');
};

//POST /connections: create a new connection
exports.create = (req, res, next) => {
    let connection = new model(req.body);
    connection.author = req.session.user;
    connection.save()
        .then(connection => res.redirect('/connections'))
        .catch(err => {
            if (err.name === 'ValidationError') {
                err.status = 400;
            }
            next(err);
        });
    res.redirect('/connections');
};

//GET /connections/:id: send details of connection identified by id
exports.show = (req, res, next) => {
    let id = req.params.id;

    model.findById(id).populate('author', 'firstName lastName')
        .then(connection => {
            if (connection) {
                return res.render('./connection/show', { connection });
            } else {
                let err = new Error('Cannot find a connection with id ' + id);
                err.status = 404;
                next(err);
            }
        })
        .catch(err => next(err));
};

//GET /connections/:id/edit: send form for editing an existing connection
exports.edit = (req, res, next) => {
    let id = req.params.id;

    model.findById(id)
        .then(connection => {
            if (connection) {
                return res.render('./connection/edit', { connection });
            } else {
                let err = new Error('Cannot find a connection with id ' + id);
                err.status = 404;
                next(err);
            }
        })
        .catch(err => next(err));
};

//PUT /connections/:id: update the connection identified by id
exports.update = (req, res, next) => {
    let connection = req.body;
    let id = req.params.id;

    model.findByIdAndUpdate(id, connection, { useFindAndModify: false, runValidators: true })
        .then(connection => {
            if (connection) {
                res.redirect('/connections/' + id);
            } else {
                let err = new Error('Cannot find a connection with id ' + id);
                err.status = 404;
                next(err);
            }
        })
        .catch(err => {
            if (err.name === "ValidationError") {
                err.status = 400;
            }
            next(err);
        });
    res.redirect('/connections');
};

//DELETE /connections/:id: delete connection identified by id
exports.delete = (req, res, next) => {
    let id = req.params.id;

    model.findByIdAndDelete(id, { useFindAndModify: false })
        .then(connection => {
            if (connection) {
                res.redirect('/connections');
            } else {
                let err = new Error('Cannot find a connection with id ' + id);
                err.status = 404;
                return next(err);
            }
        })
        .catch(err => next(err));
};