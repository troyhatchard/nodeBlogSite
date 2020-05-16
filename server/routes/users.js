const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const debug = require('debug')('blogSite:api');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const auth = require('../middleware/auth');


const {User, validate} = require('../app_logic/models/user');

router.get('/me', auth, async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');
  res.send(user);
});

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const users = await User.find();
  res.json(users);
});

router.post('/', async function(req, res) {
  debug('request body: ' + JSON.stringify(req.body) + 'of type: ' +  typeof(req.body));
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const { name, email, password } = req.body;
  if (await User.findOne({email: email})){
    res.status(400).send('User already registered');
  } else {
    const salt = await bcrypt.genSalt(10);
    hashedPass = await bcrypt.hash(password, salt);
    const newUser = new User ({
      name: name,
      email: email,
      password: hashedPass
    });
    await newUser.save();
    
    //automatically log a user in on create 
    const token = User.generateAuthToken();
    res.header('x-auth-token', token).send(newUser.toJSON())
  }
  
});


module.exports = router;
