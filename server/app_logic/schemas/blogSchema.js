const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    postNumber: Number
})

module.exports = blogSchema;