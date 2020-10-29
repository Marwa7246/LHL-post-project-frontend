const path = require('path');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const mongoConnect = require('./utils/db').mongoConnect;

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const usersRouter = require('./routes/users');
const servicesRouter = require('./routes/services');

app.use(usersRouter);

mongoConnect(() => {
    app.listen(3000, () => console.log('listening on 3001'));
  });
  