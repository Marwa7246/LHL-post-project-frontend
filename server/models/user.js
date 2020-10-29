const mongodb = require('mongodb');
const getDb = require('../util/db').getDb;

class User {
    constructor(email, username, firstName, lastName, password ) {
        this.email = email;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this. password = password
    }
}