let User = require('../model/user');

exports.login_post = (req, res, next) => {
    let userSession = req.session;
    userSession.email = req.body.email;

    let user = new User({
        email: req.body.email,
        password: req.body.password
    });

    user.save()
    .then(item => {
            console.log("item saved to database");
    })
    .catch(err => {
            console.log("unable to save to database");
    });
    res.redirect('/home');
};

exports.logout = (req, res, next) => {
    if (req.session) {
        req.session.destroy((err) => {
            if(err) console.log('algo salio mal al cerrar sesion')
            return res.redirect('/login');
        });
    }
};