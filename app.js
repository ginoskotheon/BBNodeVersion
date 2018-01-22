const express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
//ar cookieParser = require('cookie-parser');
const expressHbs = require('express-handlebars');
const routes = require('./routes/index');
const app = express();


app.engine('.hbs', expressHbs({defaultLayout: 'layout', 
extname:'.hbs'}));
app.set('view engine', '.hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.listen(3000, ()=>{
    console.log('Listening on port 3000');
});

module.exports = app;