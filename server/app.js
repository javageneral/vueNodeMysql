var api = require('./api');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(api);
// app.use(express.static(path.resolve(__dirname,'../dist')));
// app.get('*',function(req,res){
//   const html = fs.readFileSync(path.resolve(__dirname,'../dist/index.html'),'utf-8');
//   res.send(html);
// });

app.listen(2333,function(){
	console.log("开始监听2333");
});
