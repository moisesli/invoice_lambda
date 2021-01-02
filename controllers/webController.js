var AWS = require("aws-sdk");
let awsConfig = {
	"region": "us-east-1",
	"endpoint": "http://dynamodb.us-east-1.amazonaws.com",
	"accessKeyId": "AKIARUGS3XNMTHXY6NW2", "secretAccessKey": "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"
}

exports.index = function (req, res) {	
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
	// res.render('index', {title: 'moises'});
}

