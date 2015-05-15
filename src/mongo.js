mongodb = require('mongodb');

var mongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/test'

// this is test function
// mongoClient.connect(url,function(err,db){
// 	if(err)
// 		console.log("having issues connecting with mongodb " + err);
// 	else {
// 		console.log("hurray !!! got connected with mongodb");

// 	var user = {username:'paresh'};
// 	var people = db.collection("people");
// 	people.insert([user],function(err,result){
// 		if(err)
// 			console.log("error while inserting record" + err);
// 		else
// 			console.log("inserted document into 'users' collection ... ");
// 		db.close(); // as this is callback function we need to close connection only once it is installed ...
// 	});
// }
// });

// this is actual function which can be integrated in code...
insert = function(collectionName,people){
	console.log(' inserting people : ' + people + " collectionName " + collectionName);
	mongoClient.connect(url,function(err,db){
		if(err)
			consol.log('eror while connecting with database ' + err);
		var collection = db.collection(collectionName);
		collection.insert([people],function(err,result){
			if(err)
				console.log('error while inserting data in database' + err);
			db.close();

		});
	});
};

findByUserName = function(collectionName,userName){
	mongoClient.connect(url,function(err,db){
		if(err)
			console.log("can not connect to mongo " + err);
		var collection = db.collection(collectionName);
		var cursor = collection.find({name:'chirag'});
		cursor.each(function(err,doc){
			if(err)
				console.log('error while searching data in database' + err);
			console.log(doc);
		});
	});
};

findByUserNameToArray = function(collectionName,userName){
	mongoClient.connect(url,function(err,db){
		if(err)
			console.log("can not connect to mongo " + err);
		var collection = db.collection(collectionName);
		collection.find({name:'chirag'}).toArray(function(err,data){
			for(var i=0;i<data.length;i++){
				strJson = '{"name":"'+data[i].name+'"}';
				console.log(strJson + i + " : " + data.length);
			}
		});
	});
};

exports.insert = insert;
exports.findByUserName = findByUserName;
exports.findByUserNameToArray = findByUserNameToArray;