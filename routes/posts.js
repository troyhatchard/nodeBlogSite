//blog post routes

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('blogHome', {title: 'Blog Site - Blog', heading: 'Blog Posts'})
});

router.get('/test', (req, res) => {
    res.render('blogPostTest', {title: 'Blog Site - Test', postTitle: 'My Test Post', postContent: 'This is a sample blog post. \lThis is a test on a new line'})
});

module.exports = router;
