const Login = require('../models/LoginModel');

exports.loginGet = (req, res) => {
    res.render('login');
}

exports.registerPost = async (req, res) => {
  try {
    const login = new Login(req.body);
    await login.register();

    if (login.errors.length > 0) {
      return res.status(400).json({ errors: login.errors });
    }

    res.status(201).json({ message: 'Usuário criado com sucesso.', user: login.user });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Erro no servidor.' });
  }
};

exports.loginPost = async (req, res) => {
  try {
    const login = new Login(req.body);
    await login.login();

    if (login.errors.length > 0) {
      return res.status(400).json({ errors: login.errors });
    }

    res.status(200).json({ message: 'Login bem-sucedido.', user: login.user });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Erro no servidor.' });
  }
};


exports.logoutGet = function(req, res) {
    req.session.destroy();
    res.redirect('/');
}
