const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Joi = require('joi');
const debug = require('debug')('blogSite:api');

const blogSchema = require('../app_logic/schemas/blogSchema');
const Blog = mongoose.model('Blog', blogSchema);

router.get('/', async function(req, res) {
    debug("hello get request");
    const posts = await Blog.find();
    res.json(posts);
  });

router.post('/', async function(req, res) {
    debug('request body: ' + JSON.stringify(req.body) + 'of type: ' +  typeof(req.body));
    const { error } = validateData(req.body);
    if (error) return res.status(400).send(error.details[0].message + '\n request must be JSON');
    const { title, content } = req.body;
    const postNumber = await getNextPostNum();
    const blogPost = new Blog ({
        title: title,
        content: content,
        postNumber: postNumber
    });
     await blogPost.save();
    res.send(await Blog.find());
})

const getNextPostNum = async () => {
    const postQuery = await Blog.find({postNumber: { $gt: 0}});
    allPostNums = postQuery.map((post) => post.postNumber);
    const lastPostNum = Math.max.apply(null, allPostNums);
    return lastPostNum + 1;
}
const validateData = (post) => {
    schema = {
        title: Joi.string().min(3).required(),
        content: Joi.string().required()
    };
    return Joi.validate(post, schema);
}

module.exports = router;
  