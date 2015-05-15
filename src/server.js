// mongotest

var people = {name:'chirag'}

mongo = require('./mongo');
mongo.insert('user',people);
// mongo.findByUserName('user','chirag');
mongo.findByUserNameToArray('user','chirag');