var sports = require('../models/sports');
// List of all sports
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

exports.sports_delete = async function(req, res) {
console.log("delete " + req.params.id)
try {
result = await sports.findByIdAndDelete( req.params.id)
console.log("Removed " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": Error deleting ${err}}`);
}
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

// for a specific sports.
exports.sports_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await sports.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };   

//Handle sports update form on PUT.
exports.sports_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await sports.findById( req.params.id)
    // Do updates of properties
    if(req.body.name) toUpdate.name = req.body.name;
    if(req.body.hours) toUpdate.hours = req.body.hours;
    if(req.body.players) toUpdate.players = req.body.players;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };

    
// Handle a show one view with id specified by query
exports.sports_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await sports.findById(req.query.id)
        res.render('sportsdetail', { title: 'sports Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

    // Handle building the view for creating a vehicle.
    // No body, no in path parameter, no query.
    // Does not need to be async
exports.sports_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('sportscreate', { title: 'sports Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for updating a costume.
// query provides the id
exports.sports_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await sports.findById(req.query.id)
        res.render('sportsupdate', { title: 'sports Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};


// Handle a delete one view with id from query
exports.sports_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await sports.findById(req.query.id)
        res.render('sportsdelete', {
            title: 'sports Delete', toShow: result});
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};


