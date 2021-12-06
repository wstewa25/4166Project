const {body} = require('express-validator');
const {validationResult} = require('express-validator');

exports.validateId = (req, res, next) => {
    let id = req.params.id;
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        let err = new Error('Invalid connection id');
        err.status = 400;
        return next(err);
    } else {
        return next();
    }
}

exports.validateSignUp = [body('firstName', 'First name cannot be empty').notEmpty().trim().escape(),
body('lastName', 'Last name cannot be empty').notEmpty().trim().escape(),
body('email', 'Email must be a valid email address').isEmail().trim().normalizeEmail(),
body('password', 'Password must be at least 8 characters and at most 64 characters').isLength({min: 8, max: 64})];

exports.validateLogIn = [body('email','Email must be a valid email address').isEmail().trim().normalizeEmail(),
body('password', 'Password must be at least 8 characters and at most 64 characters').isLength({min: 8, max: 64})];

exports.validateRsvp = [body('rsvp').isIn(['YES', 'NO', 'MAYBE'])];

exports.validateResult = (req, res, next) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        errors.array().forEach(error=> {
            req.flash('error', error.msg);
        });
        return res.redirect('back');
    } else {
        return next();
    }
}

exports.validateConnection = [
    body('name', 'Connection Name cannot be empty').notEmpty().trim().escape(),
    body('details', 'Connection Details must be at least 10 characters in length').trim().escape().isLength({min: 10}),
    body('category', 'Connection Category cannot be empty').notEmpty().trim().escape().isIn(['LearningAndPractice', 'Competitions', 'Social Gatherings']),
    body('date', 'Connection Date cannot be empty').notEmpty().trim().escape(),
    body('start_time', 'Connection start time cannot be empty').notEmpty().trim().escape(),
    body('end_time', 'Connection end time cannot be empty').notEmpty().trim().escape(),
    body('image', 'Connection image link cannot be empty').notEmpty().trim(),
    body('location', 'Connection location cannot be empty').notEmpty().trim().escape(),
];