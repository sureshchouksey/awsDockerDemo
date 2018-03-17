// var http = require('http');
// var express = require('express');
// var app = express();


// app.get('/',function(req,res){
//     res.send('Welcome world');
// })


// app.get('/home',function(req,res){
//     res.send('home');
// })


// app.get('/about',function(req,res){
//     res.send('about');
// })


// var server = app.listen(8081, function () {
//     //var host = server.address().address
//     //var port = server.address().port
    
//     console.log("Example app listening at 8080");
//  })


// http.createServer(function(req,response){
//     // Send the HTTP header 
//    // HTTP Status: 200 : OK
//    // Content Type: text/plain
//    response.writeHead(200, {'Content-Type': 'text/plain'});
   
//    // Send the response body as "Hello World"
//    response.end('Welcome to nodejs\n');
// }).listen(8080);


//console.log('server is running on port 8080');

//var http = require ("http");
//var express = require ("express");
// http.createServer(function(request,response){
// response.writeHead(200,{'content-type':'text/plain'});
// response.end('welcome to my programming world');
// }).listen(8081);
// console.log("server is running on  http://127.0.0.1:8081/");

/*var http = require ("http");
http.createServer(function(request,response){
    response.writeHead(200,{"content-type":"text/plain"});
    response.end("welcome to my programming world");
}).listen(8082);
console.log("server is running on port 8082");*/

// var express = require('express');
// var app = express();

// app.use(express.static('public'));//publish a folder

// app.get('/index', function (req, res) {
//     res.sendFile( __dirname + "/" + "index.html" );
 
//  })

//  app.get('/register', function (req, res) {
//     res.sendFile( __dirname + "/" + "register.html" );
//  })


//  app.get('/login', function (req, res) {
//     res.sendFile( __dirname + "/" + "login.html" );
//  })


// app.get('/',function(req,res){
// res.send('Welcome to my world and i am the king of this world')});

// app.get('/home',function(req,res){
//     res.send('HOME')});

// app.get('/add',function(req,res){
// //     var a=5,b=6;
// // var c =a+b;
//      var a = req.query.firstNumber;
//      var b = req.query.secondNumber;
//     var c = parseInt(a) + parseInt(b);
//      console.log(req.query);
//     res.send('add= ' +c, req.query.userName, req.query.userName);
//      res.send(req.query.userName);
//      res.send(req.query.emailId);
// })
// app.get('/sub',function(req,res){
//     res.send('in progress')});


// var server = app.listen(8083, function () {
// var host = server.address().address
// var port = server.address().port
// console.log("Example app listening at 8083")});