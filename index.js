//nodejs blog site

const express = require('express');
const app = express();
const port = 3011;

app.get('/', (req, res) => res.sendFile('index.html'));

app.listen(port, () => console.log('Blog site is listening on port ${port}!'));