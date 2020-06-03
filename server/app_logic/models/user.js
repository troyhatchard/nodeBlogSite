const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');
const Joi = require('joi');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength:50
    },
    email: {
        type: String,
        unique: true,
        required: true,
        minlength:5,
        maxlength: 255
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
    isAdmin: Boolean
});

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin} , config.get('jwtPrivateKey'));
    return token;
}

const User = mongoose.model('User', userSchema);

const validateData = (user) => {
    schema = {
      name: Joi.string().min(3),
      email: Joi.string().min(5).max(255).required().email(),
      password: Joi.string().min(6).required()
    };
    return Joi.validate(user, schema);
  }
  

exports.Schema = userSchema;
exports.User = User;
exports.validate = validateData;