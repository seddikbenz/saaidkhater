var express = require('express');
var router = express.Router();
var db = require('../database/models')

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.Article.findAll().then((articles)=>{
    res.send({status: 'ok', data: articles});
  }).catch(()=>{
    res.send({status: 'error'})
  })
});

module.exports = router;
