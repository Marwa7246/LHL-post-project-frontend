require('dotenv').config();
const { MongoClient } = require('mongodb');

const MONGODB_URI = process.env.MONGODB_URI;

let _db;

const mongoConnect = callback => {
    //Connect to mongoDb
    MongoClient.connect(MONGODB_URI)
        .then(client => {
            console.log('db connected');
            //Assign mongo database to _db variable
            _db = client.db();
            //Run call back passed as arg. In this case it just starts server (app.js)
            callback();
        })
        .catch(err => {
            console.log(err);
            throw(err);
        })
}

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No database found.'
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;