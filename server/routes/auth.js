const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const debug = require('debug')('blogSite:api');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const config = require('config');

if (!config.get('jwtPrivateKey')) {
    console.error('FATAL ERROR: jwt private key env is not defined')
    process.exit(1);
}

const {User, validate} = require('../app_logic/models/user');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const users = await User.find();
  res.json(users);
});

/*
  This is for logging a user in. To log a user out, we would delete the 
  x-auth-token from the http headers on the client side. 
  It is important to be useing https so that the web traffic is encrypted
  so a potential hacker couldn't intercept the token and have full access 
  to this user's account.
*/

router.post('/', async function(req, res) {
  debug('request body: ' + JSON.stringify(req.body) + 'of type: ' +  typeof(req.body));
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const { name, email, password } = req.body;
  if (user = await User.findOne({email: email})){
    const validPass = await bcrypt.compare(password, user.password);
    if (validPass) {
        const token = User.generateAuthToken();
        res.send(token);
    } else res.status(400).send('Invalid email or password');
  } else {
    res.status(400).send('Invalid email or password');
  }
  
});


module.exports = router;
