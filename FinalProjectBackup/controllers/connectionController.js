const model = require('../models/connection');
const rsvpModel = require('../models/rsvp');

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
        .then(connection => {
            req.flash('success', 'Connection has been created successfully');
            res.redirect('/connections');
        })
        .catch(err => {
            if (err.name === 'ValidationError') {
                req.flash('error', err.message);
                return res.redirect('/back');
            }
            next(err);
        });
};

//GET /connections/:id: send details of connection identified by id
exports.show = (req, res, next) => {
    let id = req.params.id;
    Promise.all([model.findById(id).populate('author', 'firstName lastName'), rsvpModel.count({connection:id, rsvp:'YES'})])
        .then(results => {
            const [connection, rsvps] = results;
            if (connection) {
                return res.render('./connection/show', { connection, rsvps });
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
            return res.render('./connection/edit', { connection });
        })
        .catch(err => next(err));
};

//PUT /connections/:id: update the connection identified by id
exports.update = (req, res, next) => {
    let connection = req.body;
    let id = req.params.id;

    model.findByIdAndUpdate(id, connection, { useFindAndModify: false, runValidators: true })
        .then(connection => {
            req.flash('success', 'Successfully updated Connection!');
            res.redirect('/connections/' + id);
        })
        .catch(err => {
            if (err.name === "ValidationError") {
                req.flash('error', err.message);
                return res.redirect('/back');
            }
            next(err);
        });
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    Promise.all([model.findByIdAndDelete(id, {useFindAndModify: false}), rsvpModel.deleteMany({connection:id})])
        .then(connection => {
            req.flash('success', 'Successfully deleted connection and associated RSVPs');
            res.redirect('/connections');
        })
        .catch(err => {
            if(err.name === 'ValidationError') {
                req.flash('error', err.message);
                return res.redirect('back');
            }
            next(err);
        });
};

//RSVP /connections/:id/rsvp: rsvp to this connection
exports.rsvp = (req, res, next) => {
    let id = req.params.id;
    rsvpModel.findOne({connection:id, user:req.session.user})
    .then(rsvp => {
        if (rsvp){
            rsvpModel.findByIdAndUpdate(rsvp._id, {rsvp:req.body.rsvp}, {useFindAndModify: false, runValidators: true})
            .then(rsvp => {
                req.flash('success', 'Successfully updated RSVP');
                res.redirect('/users/profile');
            })
            .catch(err => {
                console.log(err);
                if(err.name === 'ValidationError') {
                    req.flash('error', err.message);
                    return res.redirect('/back');
                }
                next(err);
            });
        } else {
            let rsvp = new rsvpModel ({
                connection: id,
                rsvp: req.body.rsvp,
                user: req.session.user
            });
            console.log(rsvpModel);
            rsvp.save()
            .then(rsvp =>{
                req.flash('success', 'Successfully created RSVP');
                res.redirect('/users/profile');
            })
            .catch(err=> {
                req.flash('error', err.message);
                next(err);
            });
        }
    })
};

exports.deleteRsvp = (req, res, next)=>{
    let id = req.params.id;
    rsvpModel.findOneAndDelete({connection: id, user: req.session.user})
    .then(rsvp => {
        req.flash('success', 'Successfully deleted RSVP');
        res.redirect('/users/profile');
    })
    .catch(err=> {
        req.flash('error', err.message);
        next(err);
    });
};