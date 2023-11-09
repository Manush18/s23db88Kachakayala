var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var sports_controller = require('../controllers/sports');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// sports ROUTES ///
// POST request for creating a sports.
router.post('/sports', sports_controller.sports_create_post);
// DELETE request to delete sports.
router.delete('/sports/:id', sports_controller.sports_delete);
// PUT request to update sports.
router.put('/sports/:id', sports_controller.sports_update_put);
// GET request for one sports.
router.get('/sports/:id', sports_controller.sports_detail);
// GET request for list of all sports items.
router.get('/sports', sports_controller.sports_list);
module.exports = router;
// API for our resources
exports.api = function(req, res) {
res.write('[');
res.write('{"resource":"sports", ');
res.write(' "verbs":["GET","PUT", "DELETE"] ');
res.write('}');
res.write(']')
res.send();
};
