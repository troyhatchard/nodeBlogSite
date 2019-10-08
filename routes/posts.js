//blog post routes

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('blogHome', {title: 'Blog Site - Blog', heading: 'Blog Posts'})
});

router.get('/test', (req, res) => {
    res.render('blogPostTest', {title: 'Blog Site - Test', postTitle: 'My Test Post', postContent: 'This is a sample blog post. This is a test on a new line'})
});

router.get('/blogFile', (req, res) => {
    res.render('blogPostFile', {title: 'Blog Site - ', postTitle: 'My Test Post', postContent: 'This is a sample blog post. This is a test on a new line'})
});

router.get('/:id', (req, res) => {
    id = req.params.id;
    title = `Blog Post ${id}`;
    res.render('blogPostFile', {title: title, postTitle: title, postId:id})
});

module.exports = router;
