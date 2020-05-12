const express = require('express');
const router = express.Router();
const config = require('config');
const mongoose = require('mongoose');



const blogDb = require('../app_logic/blogDb');
const blogSchema ;
async function connBlogDb(
    blogSchema = require('../app_logic/schemas/blogSchema');
);

const connString = config.get('dbConnString');

mongoose.connect(connString, { useNewUrlParser:true })
    .then(console.log('Mongo connected'))
    .catch(console.error('Error connecting to mongo'));

const Blog = mongoose.model('Blog', blogSchema);

//const Blog = blogDb.model('Blog', blogSchema);

/* GET home page. */
router.get('/', async function(req, res, next) {
    const posts = await Blog.find();
    res.send(posts)
});

module.exports = router;
