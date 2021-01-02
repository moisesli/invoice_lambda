
exports.login = function (req, res) {
	res.render('pages/login');
}

exports.ApiLogin = function (req, res) {
	var auth = {
		login: 'true',
		name: 'Abraham Moises',
		apellido: 'Linares Oscco',
		ruc: '10425162531'
	}	
	res.json(auth);
}

exports.register = function (req, res) {
	res.render('auth/register');
}