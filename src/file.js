fs = require('fs')


// async function, if you want to return data then try to call async function.....
readf = function(name) {
	result = exst(name);
	/// this value will be undefined if the function is called in async manner ... hoh :)
	console.log("..."+result);
	if(result){
	fs.readFile(name,function(err,data){
		console.log('reading file ' + name);
		if(err) throw err;
		console.log(data.toString());
	});
}
	// } else {
		// console.log(';;;;');
	// }
}


// sync function as we want to return data and that will be utitlized by calling function ...
readfsync = function(name) {
	result = exst(name);
	/// this value will be undefined if the function is called in async manner ... hoh :)
	console.log("..."+result);
	if(result){
		return fs.readFileSync(name)
	}
}
	// } else {
		// console.log(';;;;');
	// }


writef = function(absFileName, data){
	fs.exists(absFileName, function(exists){
		if(exists) {
			console.log(' file exists ...');
			return;
		} else {
			fs.writeFile(absFileName,data, function(err){
			if(err) throw err;
				console.log('file saved.');
			console.log("file writing is successful.")
	});
		}
	});
	
}

// this is async function so it should not return someting....
// exst = function(absFileName){
// 	console.log('Checking whether file exists or not ' + absFileName);
// 	fs.exists(absFileName, function(exists){
// 		console.log("--"+exists);
// 		return exists;
// 	});
// }

// this is sync fucntion ...
exst = function(absFileName){
	console.log('Checking whether file exists or not ' + absFileName);
	return fs.existsSync(absFileName)
}

exports.readf = readf;
exports.readfsync = readfsync;
exports.writef = writef;
