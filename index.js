//nodejs blog site

const config = require('config');
const express = require('express');
const app = express();
const port = process.env.PORT || 3011;
const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');

app.set('view engine', 'pug'); //don't have to require this because it loads itself automatically

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

app.get('/', (req, res) => {
    res.render('index', {title: 'Blog Site', message: 'Welcome to Troy\'s website with Pug!'})
});

app.get('/blog', (req, res) => res.sendFile(path.join(__dirname + '/routes/blogpost.html')));

app.listen(port, () => console.log(`Blog site is listening on port ${port}!`));