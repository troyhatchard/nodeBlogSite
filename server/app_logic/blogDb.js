const mongoose = require('mongoose');
const config = require('config');

const connString = config.get('dbConnString');


mongoose.connect(connString, { useNewUrlParser:true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDb'))
    .catch(err => console.error('Could not connect to MongoDb'));
