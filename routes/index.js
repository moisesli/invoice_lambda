var express = require('express');
var router = express.Router();

// import of controller
var auth_controller = require('../controllers/authController');
var web_controller = require('../controllers/webController');
var dashboard_controller = require('../controllers/dashboardController');

// rutas
router.get('/', web_controller.index);
router.get('/login', auth_controller.login);
router.get('/api/login', auth_controller.ApiLogin);
router.get('/dashboard', dashboard_controller.dashboard);

module.exports = router;