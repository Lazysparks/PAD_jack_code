const router = require('express').Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('login', {
        title: 'Express'
    });
});

router.get('/profile', function (req, res, next) {
    res.render('profile', {
        title: 'Profiel'
        , isAuthenticated: true
        , user: {
            firstname: "Jack"
            , lastname: "Monkau"
        , }
        , profile: {
            firstname: "Jasper"
            , lastname: "van Assem"
        }
    });
});


router.get('/login', function (req, res, next) {
    res.render('login', {
        isAuthenticated: false
    });
});

router.post('/login', function (req, res, next) {
    console.log(req.body);
    res.sendStatus(200);
});

router.get('/logout', function (req, res, next) {
    res.redirect('/login');
});

module.exports = router;