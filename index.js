//nodejs blog site

const express = require('express');
const app = express();
const port = 3011;
const path = require('path');

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));

app.listen(port, () => console.log('Blog site is listening on port ${port}!'));