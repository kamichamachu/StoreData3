var express = require('express');
var router = express.Router();

module.exports = router;

//########################################

//to process data sent in on request need body-parser module

var bodyParser = require('body-parser');
var path = require ('path'); //to work with separtors on any OS including Windows
var querystring = require('querystring'); //for use in GET Query string of form URI/path?name=value

router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencode
//#########################################

//now processing post
router.post('/storeData', function(req, res, next) {
//expecting data variable called order--retrieve value using body-parser
    var value_name = req.body.order  //retrieve the data associated with order
    res.send("order succesfully received: " + value_name);
});