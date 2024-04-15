// run `node index.js` in the terminal
require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const session = require('express-session');
const authRoutes = require('./server/routes/auth');


//Database
const connectDB = require('./server/config/db');

const app = express();
const PORT = 5000 || process.env.PORT;

//Database Connection
connectDB();

app.use('/', authRoutes);

app.use(express.static('public'));

//Templatingg Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use('/', require('./server/routes/main'));

//Express Session
/* app.use(session({
  secret: 'your secret key',
  resave: false,
  saveUninitialized: false,
})); */

app.listen(PORT, ()=> {
  console.log(`App listening on port ${PORT}`);
});
