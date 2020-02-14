const router = require('express').Router();


/* GET home page. */
router.get('/', async (req, res) => {
  res.render('intropage/index');
});


module.exports = router;
