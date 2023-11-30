var express = require('express');
var sports_controller= require('../controllers/sports');
var router = express.Router();
/* GET create update page */
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    res.redirect("/login");
    }
 
/* GET home page. */
router.get('/', sports_controller.sports_view_all_Page );
router.get('/sports/:id', sports_controller.sports_detail);
/* GET detail vehicles page */
router.get('/detail', secured,sports_controller.sports_view_one_Page);
/* GET create vehicle page */
router.get('/create', secured,sports_controller.sports_create_Page); 
router.get('/update',secured, sports_controller.sports_update_Page);
/* GET delete costume page */
router.get('/delete',secured, sports_controller.sports_delete_Page);
module.exports = router;
