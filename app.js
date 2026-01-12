const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const port = 3000;

const indexRouter = require('./app_server/routes/index');

app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

app.use(express.static('public'));

app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
