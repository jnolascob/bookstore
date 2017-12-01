let User = require('../model/user');

exports.login_post = function(req, res, next) {
    console.log(`email: ${req.body.email}`);
    console.log(`password: ${req.body.password}`);

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
    res.redirect('/dashboard');
}