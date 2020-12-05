var express = require('express');
var AWS = require("aws-sdk");
var router = express.Router();

// AWS.config.update({
//     region: "us-west-2",
//     endpoint: "http://localhost:8000"
//   });

let awsConfig = {
	"region": "us-east-1",
	"endpoint": "http://dynamodb.us-east-1.amazonaws.com",
	"accessKeyId": "AKIARUGS3XNM5GNW3QUT", "secretAccessKey": "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"
}

/* GET home page. */
router.get('/', function (req, res, next) {
	AWS.config.update(awsConfig);
	let docClient = new AWS.DynamoDB.DocumentClient();
	var params = {
		TableName: "usuarios",
		Key: {
			"id": "1"
		}
	};
	docClient.get(params, function (err, data) {
		if (err) {
			console.log("users::fetchOneByKey::error - " + JSON.stringify(err, null, 2));
		}
		else {
			res.render('index', { title: JSON.stringify(data.Item.nombre, null, 2) });
			// console.log("users::fetchOneByKey::success - " + JSON.stringify(data, null, 2));
		}
	})
	
});

router.get('/login', function (req, res, next) {
	res.render('pages/login');
});

router.get('/dashboard', function (req, res, next) {
	res.render('pages/dashboard');
});

router.get('/api/login',function(req,res,next) {
	console.log('Hola moises2');
	res.json("hola mundo");
});

module.exports = router;