var express = require('express');
var router = express.Router();

module.exports = router;

//now processing post
router.post('/storeData', function(req, res, next) {
//expecting data variable called order--retrieve value using body-parser
    var value_name = req.body.order  //retrieve the data associated with order
    res.send("order succesfully received: " + value_name);
});