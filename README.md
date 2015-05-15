Steps to follow for running grunt

1. install grunt -> npm install -g grunt-cli
2. create package.json file -> npm init
3. install grunt -> npm install grunt --save-dev // check dependency ...
4. create Gruntfile.js -> touch Gruntfile.js
5. grunt


FIX for mongodb : 
you will get the error ({ [Error: Cannot find module '../build/Release/bson'] code: 'MODULE_NOT_FOUND' })
check this -> http://stackoverflow.com/questions/28651028/cannot-find-module-build-release-bson-code-module-not-found-js-bson

creating restful webservice in node.js using express, bodyparser and http
sending data using curl : http get / POST request 

curl -v http://localhost:1212/users/paresh
curl -H "Content-Type: application/json" -X POST --data '{"name":"paresh"}' http://localhost:1212/create

Unit Testing...

We are using mocha framework and task grunt-mocha-test
check out file Gruntfile.js having mochaTest task...

npm install -g mocha
npm install grunt-mocha-test --save-dev
grunt -> will fire the test files first and if successful it will execute copy task.
