const express = require('express');
const path = require('path');
const cors = require('cors');
const hbs = require('hbs');
const app = express();

app.use(cors());

app.use(express.json());

hbs.registerHelper('eq', function(a, b) {
  return a === b;
});

app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

const indexRouter = require('./app_server/routes/index');
const apiRouter = require('./app_api/routes');

app.use('/', indexRouter);
app.use('/api', apiRouter);

app.use(express.static(path.join(__dirname, 'public')));

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});