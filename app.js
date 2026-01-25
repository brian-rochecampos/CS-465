const express = require('express');
const path = require('path');
const hbs = require('hbs');

require('./app_server/models/db');
require('./app_server/models/trip');

const indexRouter = require('./app_server/routes/index');

const app = express();

hbs.registerHelper('eq', function(a, b) {
  return a === b;
});

app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

app.use(express.static(path.join(__dirname, 'public')));

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
