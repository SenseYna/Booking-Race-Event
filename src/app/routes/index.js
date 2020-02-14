var router = require('express').Router();
var {checkPermission} = require('../../services/checkPermission')


router.use('/', require('./homepage'));
router.use('/login', require('./adminpage/login'));

router.use('/intro',require('./intropage'));

// router.use();
router.use('/admin',checkPermission(["*"]), require('./adminpage'));
module.exports = router;
