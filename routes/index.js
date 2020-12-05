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

AWS.config.update(awsConfig);
let docClient = new AWS.DynamoDB.DocumentClient();
let fetchOneByKey = function () {
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
            console.log("users::fetchOneByKey::success - " + JSON.stringify(data, null, 2));
        }
    })
}    

fetchOneByKey();

/* GET home page. */
router.get('/', function(req, res, next) {    
    console.log('moises');
    res.render('index', { title: 'Factura Electronica' });
});

router.get('/login', function (req, res, next) {
   res.render('pages/login');
});

router.get('/dashboard', function (req, res, next) {
    res.render('dashboard');
 });

module.exports = router;