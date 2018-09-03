var express = require('express');
var cookieParser = require('cookie-parser');
var util = require('util');

var app = express();
app.use(cookieParser);
app.use(express.static('public'));

app.get('/',function(req,res){
    console.log("Cookies: " + util.inspect(req.cookies));
});

var server = app.listen(8081,function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('application start %s:%s',host,port);
});