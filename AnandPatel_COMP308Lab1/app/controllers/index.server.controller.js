//This code uses the CommonJS module pattern to define a function named render()
//You can require this module and use this function
//You'll need to use Express routing functionality to utilize the controller
exports.showFeedbackPage = function (req, res) {
    //read the username and password from body property of request object
    var username = req.body.username;
    var password = req.body.password;
    //make a reference to the session object
    var session = req.session;
    //store username in session object
    session.username = username;
    console.log("In index function - User name = " + session.username);
    //check if session object contains the username
    if (session.username) {
        //display feedback page
        res.render('anand_feedback', {
            title: 'Feedback Page',
            username: username
        });
    }
    else {

        //redirect to the root
        res.redirect('/');

    }
    console.log("GET request - User name = " + session.username);
};