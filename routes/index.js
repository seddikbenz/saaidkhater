var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.sendFile('index2.html');
  //res.sendFile(path.join(__dirname, 'build', 'index.html'));
  res.send('respond with a resource');
});

module.exports = router;
