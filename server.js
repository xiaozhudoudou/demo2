var express = require('express');
var cookieParser = require('cookie-parser');
var util = require('util');

var app = express();
app.use(express.static('views'));
app.get('/',function(req,res){
    res.send('response from express.js');
});

var server = app.listen(8081,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('application start %s:%s',host,port);
});