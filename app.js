const express = require('express');
const mainApp = express();

// Set PORT value based on ENV variables
const port = process.env.PORT || 8080;


// ------------- GET REQUESTS ----------------

/*
    Generic initial home page get request setup
*/
mainApp.get('/', (req, resp) => {
    resp.status(200).send(
        'This is the first draft web server for Pi Camera Server\n \
        Main Index Page'
    );
});

/*
    Get request for retrieving all stored images from db
*/
mainApp.get('/images', (req, resp) => {
    const imageReq = req.params.id;
    resp.status(200).send(
        "This will send all the images from the db"
    );
});

/*
    Get request for retrieving snapshot from server db
*/
mainApp.get('/images/:id', (req, resp) => {
    const imageReq = req.params.id;
    resp.status(200).send(
        "This will send the image requested from the db"
    );
});


// ------------- POST REQUESTS ----------------

/*
    Post request for actioning a live snapshot store
*/
mainApp.post('/images', (req, resp) => {
    const imageParams = req.body;
    resp.send(
        "This will send the newly taken image back"
    );
});

mainApp.listen(port, () => {
    console.log(`Listening on port ${port}`)
});
