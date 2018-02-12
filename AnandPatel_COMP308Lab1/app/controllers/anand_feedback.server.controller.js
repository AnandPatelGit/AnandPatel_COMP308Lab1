//This code uses the CommonJS module pattern to define a function named render()
//You can require this module and use this function
//You'll need to use Express routing functionality to utilize the controller
exports.render = function (req, res) {
    //read the username and password from body property of request object
    var username = req.body.username;
    var password = req.body.password;
    var firstname = req.body.firstname;
    //make a reference to the session object
    var session = req.session;
    //store username in session object
    session.username = username;
    console.log("In Display function - User name = " + session.username);
    //check if session object contains the username
    if (session.username) {
        //display greetings page
        res.render('thankyou', {
            title: 'Thank you ',
            username: firstname
        });
    }
    else {
        //redirect to the root
        res.redirect('/');
    }
    console.log("GET request - User name = " + session.username);
};