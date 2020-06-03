const mongoose = require('mongoose');
const express = require('express');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const router = express.Router();
const debug = require('debug')('blogSite:api');


const { Blog, validate } = require('../app_logic/models/blog');

router.get('/', async function(req, res) {
    debug("hello get request");
    const posts = await Blog.find();
    res.json(posts);
  });

router.post('/', auth, async function(req, res) {
    debug('request body: ' + JSON.stringify(req.body) + 'of type: ' +  typeof(req.body));
    const { error } = validate(req.body);
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

router.delete('/:id', [auth, admin], async (req, res) => {
    console.log("body of request: ", req.body);
    const blog = await Blog.findByIdAndRemove(req.params.id);
    if (!blog) return res.status(404).send('The post with the given ID was not found');
    res.send(blog);
});

const getNextPostNum = async () => {
    const postQuery = await Blog.find({postNumber: { $gt: 0}});
    allPostNums = postQuery.map((post) => post.postNumber);
    const lastPostNum = Math.max.apply(null, allPostNums);
    return lastPostNum + 1;
}

module.exports = router;
  