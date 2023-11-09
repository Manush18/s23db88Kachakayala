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
    // VIEWS
// Handle a show all view
exports.sports_view_all_Page = async function(req, res) {
    try{
    thesports = await sports.find();
    res.render('sports', { title: 'sports Search Results', results: thesports });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

//Handle sports create on POST.
exports.sports_create_post = async function(req, res) {
console.log(req.body)
let document = new sports();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"sports_name":"badminton", "hours":4, "players":"4"}
document.name = req.body.name;
document.hours = req.body.hours;
document.players = req.body.players;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

    
