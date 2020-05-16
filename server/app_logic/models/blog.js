const mongoose = require('mongoose');
const Joi = require('joi');

const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    postNumber: Number
})

const blogModel = mongoose.model('Blog', blogSchema);

const validateData = (post) => {
    schema = {
        title: Joi.string().min(3).required(),
        content: Joi.string().required()
    };
    return Joi.validate(post, schema);
}

exports.schema = blogSchema;
exports.Blog = blogModel;
exports.validate = validateData;
