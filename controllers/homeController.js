exports.home_validate = (req, res, next) => {
    console.log(`session data ${req.session.email}`);
    if (req.session && req.session.email) {
        res.render('home', { email: req.session.email });
    } else {
        res.redirect('/login');
    }
};