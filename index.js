//nodejs blog site

const express = require('express');
const app = express();
const port = process.env.PORT || 3011;
const path = require('path');

//routes
//const blog = './routes/blog';

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));

app.get('/blog', (req, res) => res.sendFile(path.join(__dirname + '/routes/blogpost.html')));

app.listen(port, () => console.log(`Blog site is listening on port ${port}!`));