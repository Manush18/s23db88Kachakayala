var express = require('express');
const sports_controllers= require('../controllers/sports');
var router = express.Router();

/* GET home page. */
router.get('/', sports_controllers.sports_view_all_Page );
module.exports = router;