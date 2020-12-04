var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Factura Electronica' });
});

router.get('/login', function (req, res, next) {
   res.render('login');
});

router.get('/dashboard', function (req, res, next) {
    res.render('dashboard');
 });

module.exports = router;