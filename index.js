const mongoose = require('mongoose')
const express = require('express');
// const session = require('express-session')
// const MongoStore = require('connect-mongo')(session);
const bodyparser = require('body-parser')
const app = express();
const validator = require('express-validator')
const cors = require('cors')
app.use(validator())
app.use(bodyparser.json())

app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    credentials: true // enable set cookie
}));
// app.use(session({
//     secret: 'supersecretstring12345!',
//     saveUninitialized: true,
//     resave: true,
//     cookie: { maxAge: (60000 * 30) },
//     store: new MongoStore({ mongooseConnection: mongoose.connection }) //not neccesary
// }))
require("./config/mongoose");
require('./config/route')(app);

app.listen(8000, ()=>console.log('Server is listening on port 8000'));