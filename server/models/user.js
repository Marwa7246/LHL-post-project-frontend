const mongodb = require('mongodb');
const getDb = require('../util/db').getDb;

// user Ids should be object ids and not strings. use function below. 
const ObjectId = mongodb.ObjectId;

const db = getDb();

class User {
    constructor(email, username, firstName, lastName, password ) {
        this.email = email;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this. password = password
    }

    save = () => {
        const db = getDb();
        return db.collection('users').insertOne(this);
    }

    static findAll = () => {
        db.users.find()
    } 
}