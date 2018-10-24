var express = require("express");
var app = express();

var MongoClient = require('mongodb').MongoClient;
var assert = require("assert");

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post("/zhuce", function(req, res) {

	var url = "mongodb://localhost:27017/linyujian";

	MongoClient.connect(url, function(err, db) {
		assert.equal(null, err);
		db.collection("linyujian11").insert({
			username:req.body.username,
			password:req.body.password
		}, function(err, result) {
				if(err){
					res.send('失败'+err)
				}
				res.send('成功')
		})
	})


});
	app.listen(3000);