require('dotenv').config();
const express = require('express');
const {MongoClient} = require ('mongodb');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users');
const servicesRouter = require('./routes/services');

const app = express();

const MONGODB_URI = process.env.MONGODB_URI;

const client = new MongoClient(MONGODB_URI);

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(usersRouter);

client.connect()
.then(response => 
app.listen(3001))
.then(response => console.log('server running on port 3001'))