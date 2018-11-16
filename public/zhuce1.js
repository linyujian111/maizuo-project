var express = require("express");
var app = express();

var MongoClient = require('mongodb').MongoClient;
var assert = require("assert");

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
	extended: false
}))
app.use(bodyParser.json())

app.post("/zhuce", function(req, res) {
	//	连接数据库服务器和数据库
	var url = "mongodb://localhost:27017/linyujian";
	MongoClient.connect(url, function(err, db) {

		assert.equal(null, err);

		//	查询该集合是否存在输入的手机号码
		db.collection("linyujian11").find({
			username: req.body.username
		}).toArray(function(err, result) {
			if(err) throw err;

			//	如果查到没有
			if(result.length > 0) {
				res.send("no")
			}
			//	如果查到有，插入新数据
			else {
				db.collection("linyujian11").insert({
					username: req.body.username,
					password: req.body.password
				}, function(err, result) {
					if(err) {
						res.send('失败' + err)
					}
					res.send('yes')
				})
			}

			//	关闭数据库
			db.close();

		})

	})

});

app.post("/login", function(req, res) {
			//	连接数据库服务器和数据库
			var url = "mongodb://localhost:27017/linyujian";
			MongoClient.connect(url, function(err, db) {
				
				//	若连接失败则报错
				assert.equal(null, err);

				//	查询该集合是否存在输入的手机号码
				db.collection("linyujian11").find({
					username: req.body.username,
					password: req.body.password
				}).toArray(function(err, result) {
					if(result.length > 0) {
						res.send("yes")
					} else {
						res.send("no")
					}
				})
				
				
			})
})
			app.listen(3000);