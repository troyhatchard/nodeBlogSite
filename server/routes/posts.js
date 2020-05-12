const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const blogSchema = require('../app_logic/schemas/blogSchema');

const Blog = mongoose.model('Blog', blogSchema);

router.get('/', async function(req, res, next) {
    const posts = await Blog.find();
    res.json(posts);
  });
  
  module.exports = router;
  