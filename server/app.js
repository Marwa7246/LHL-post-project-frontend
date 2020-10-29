const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users');
const servicesRouter = require('./routes/services');

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(usersRouter);

app.listen(3001, () => {
    console.log('app listening on port 3001');
});