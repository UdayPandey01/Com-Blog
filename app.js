require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const cookieParser = require('cookie-parser')
const methodOverride = require('method-override');

const connectDB = require('./server/config/db')

const app = express();
const PORT = 5000 || process.env.PORT;

// connect DB

connectDB();
const { isActiveRoute } = require('./server/helpers/routeHelpers');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser()); 
app.use(methodOverride('_method'));

app.use(express.static('public'));


app.locals.isActiveRoute = isActiveRoute; 


// Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use('/', require('./server/routes/main'))
app.use('/', require('./server/routes/admin'))

app.listen(PORT, ()=>{
    console.log(`App is listening on ${PORT}`)
})