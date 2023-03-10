//express에서 권장하는 main이름 app.js

var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/', function(req, res){
    res.send('Hello home page');
});
app.get('/route', function(req, res){
    res.send('Hello Router, <img src="/route.png">')
});
app.get('/login', function(req, res){
    res.send('<h1>Login please</h1>');
});
app.listen(3000, function(){
    console.log('Connected 3000 port!');
});