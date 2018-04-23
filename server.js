const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const app = express();

//Server static filles from React app
app.use(express.static(path.join(_dirname, 'client/build')));


const router  = express.Router();
app .use(bodyParser.json());
require('./models/user');
require('./config/passport');
const users = require('./api/users')
mongoose.connect('mongodb://ryan:123@ds2552889.mlab.com:55889/fortknow').then(() => {
    console.log('connected to db')
})

app.use(passport.initialize());

app.get('/', (req, res) => {
    res.end();
})

app.use('/users', users);

app.get('*', (req, res) => {
    res.sendFile(path.join(_dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('server connected');
})