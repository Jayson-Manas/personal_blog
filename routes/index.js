var express = require('express');
var router = express.Router();
var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My blog',user: 'Great User' });
});

// app.get('/', function(req, res){ 
//   res.render('index',{user: 'Great User',title:'homepage'});
// });

module.exports = router;
/////////////////////////////////
