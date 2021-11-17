const morgan = require('morgan');
const ejs = require('ejs');
const express = require('express');
const connectionRoutes = require('./routes/connectionRoutes');
const standardRoutes = require('./routes/standardRoutes');
const userRoutes = require('./routes/userRoutes');
const methodOverride = require("method-override");
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const app = express();

let port = 3000;
let host = 'localhost';
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/project', { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        //start app
        app.listen(port, host, () => {
            console.log('Server is running on port', port);
        });
    })
    .catch(err => console.log(err.message));


app.use(
    session({
        secret: "ampsdofnipaskdmflaksjdfn",
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongoUrl: 'mongodb://localhost:27017/project' }),
        cookie: { maxAge: 60 * 60 * 1000 }
    })
);
app.use(flash());

app.use((req, res, next) => {
    res.locals.user = req.session.user || null;
    res.locals.errorMessages = req.flash('error');
    res.locals.successMessages = req.flash('success');
    next();
});

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(methodOverride('_method'));

//Default to index page
app.get('/', (req, res) => {
    res.render('index');
});

//Set up routing
app.use('/connections', connectionRoutes);
app.use('/', standardRoutes);
app.use('/users', userRoutes);

//Error handling from app.js
app.use((req, res, next) => {
    let err = new Error('The server cannot locate ' + req.url);
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    console.log(err.stack);
    if (!err.status) {
        err.status = 500;
        err.message = ('Internal Server Error');
    }
    res.status(err.status);
    res.render('error', { error: err });
});