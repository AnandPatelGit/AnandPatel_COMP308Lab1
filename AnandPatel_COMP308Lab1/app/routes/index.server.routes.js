//This uses CommonJS module pattern to export a single module function.
//This function takes an express object as argument 
//Then it requires the index controller and uses its render() method
//as a middleware to GET requests made to the root path.

module.exports = function (app) {
    //load the controllers in memory
    var index = require('../controllers/index.server.controller');
    var display = require('../controllers/endgreetings.server.controller');
    
    //handle the routing of get and post request
    app.get('/', function (req, res) {
        res.render('index',
            { title: 'Login Page' })
    });
    //
    app.post('/', function (req, res) {
        //console.log("POST request - User name = " + req.body.username);
        index.showFeedbackPage(req, res); 
    });

    app.post('/endgreetings', function (req, res) {
        //console.log("POST request - User name = " + req.body.username);
        display.showEndGreetings(req, res);
    });
};
