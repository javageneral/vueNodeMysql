var models = require('./db');
var express = require('express');
var querystring = require('querystring');
var router = express.Router();
var mysql = require('mysql');

var conn = mysql.createConnection(models.mysql);
	conn.connect();

//用户添加自己的信息
router.post("/api/addmessage",function(req,res){
	// req.on('data',function(data){
		// var obj = querystring.parse(data.toString());//序列化
		// console.log(obj);
		// pool.getConnection(function(err,connection){
		// 	if (err) {console.log("与数据库建立连接失败");}
		// 	else {

	var str = 'INSERT INTO personalmessage VALUES("' + req.body.id + '","' + req.body.name +'","' + req.body.sex + '","'+
		req.body.tel + '","' + req.body.work +'","' + req.body.workAddress + '","' + req.body.sign + '","' + req.body.eat +
		'");' ;
        console.log(str);
		conn.query(str,function(err,result){
			if (err) {console.log(err);}
			else{
				console.log("添加成功");
				//console.log(result);
				//conn.end();
				}
			})
	//  })
});
//展示用户页面获取用户数据
router.get('/api/usermessage',function(req,res){
	var str = 'select *from personalmessage';
	conn.query(str,function(err,result){
		if (err) {
			console.log(err);
		}else{
			console.log("查询成功");
			console.log(result);
			res.send(result);
			//conn.end();
		}
	})
});

//注册
router.post('/api/register',function(req,res){
	var str = 'INSERT INTO user VALUES("' + req.body.id + '","' + req.body.passwd + '");';
	conn.query(str,function(err,result){
		if(err){
			console.log(err);
		}else{
			console.log("注册成功");
			console.log(result);
		}
	})
})

//登录
router.post('/api/login',function(req,res){
	var str = 'select '
})

module.exports = router;
