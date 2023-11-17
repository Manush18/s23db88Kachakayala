var express = require('express');
var sports_controller= require('../controllers/sports');
var router = express.Router();

/* GET home page. */
router.get('/', sports_controller.sports_view_all_Page );
/* GET detail vehicles page */
router.get('/detail', sports_controller.sports_view_one_Page);
/* GET create vehicle page */
router.get('/create', sports_controller.sports_create_Page);
/* GET create update page */
router.get('/update', sports_controller.sports_update_Page);
/* GET delete costume page */
router.get('/delete', sports_controller.sports_delete_Page);
module.exports = router;