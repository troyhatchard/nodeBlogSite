//nodejs blog site

const config = require('config');
const express = require('express');
const app = express();
const port = process.env.PORT || 3011;
const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');

console.log('Application Name: ' + config.get('name'));
console.log('DB Password: ' + config.get('db.password'));
nodeEnv = app.get('env');

//middleware
app.use(helmet());
if (nodeEnv == 'development'){
    app.use(morgan('common'));
}



//routes
//const blog = './routes/blog';

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));

app.get('/blog', (req, res) => res.sendFile(path.join(__dirname + '/routes/blogpost.html')));

app.listen(port, () => console.log(`Blog site is listening on port ${port}!`));