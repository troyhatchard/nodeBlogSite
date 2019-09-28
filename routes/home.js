//home routes

const express = require('express')
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index', {title: 'Blog Site', message: 'Welcome to Troy\'s website with Pug!'})
});

module.exports = router;