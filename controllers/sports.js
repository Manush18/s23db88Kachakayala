var sports = require('../models/sports');
// List of all sportss
exports.sports_list = function(req, res) {
res.send('NOT IMPLEMENTED: sports list');
};
// for a specific sports.
exports.sports_detail = function(req, res) {
res.send('NOT IMPLEMENTED: sports detail: ' + req.params.id);
};
// Handle sports create on POST.
exports.sports_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: sports create POST');
};
// Handle sports delete form on DELETE.
exports.sports_delete = function(req, res) {
res.send('NOT IMPLEMENTED: sports delete DELETE ' + req.params.id);
};
// Handle sports update form on PUT.
exports.sports_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: sports update PUT' + req.params.id);
};
// List of all sports
exports.sports_list = async function(req, res) {
    try{
    thesports = await sports.find();
    res.send(thesports);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
