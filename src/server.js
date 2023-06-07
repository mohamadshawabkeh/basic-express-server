'use strict';
const express = require("express");
const app = express();
const notFoundHandler = require('./handlers/404');
const serverDrop = require('./handlers/500');
const logger = require('./middlewares/logger')
const Validation = require('./middlewares/validation')

//---------------------------------------------------------------------------------------------------------
// Global Middlewares


app.use(express.json());
app.use(logger)


//---------------------------------------------


//---------------------------------------------------------------------------------------------------------
// Routes 

app.get('/', (req, res) => {
    res.send("This is Home Page");
});


//---------------------------------------------

app.get('/info', sendRes)


//---------------------------------------------
app.get('/person/:name', Validation(''), (req, res) => {
    res.send({
        name: req.name,
    });
});

app.get('/person', (req, res, next) => {
    const error = new Error('No name inserted');
    next(error);
    
  });

//   app.get('/person/:name', Validation(''),sendRes, (req, res,next) => {
//     res.send({
//         name: req.name,
//     });
// });

//---------------------------------------------------------------------------------------------------------
// Functions 
function sendRes (req,res){
    res.json({
        id: 1,
        name: "john",
        // name: req.name,
        email: "john@g2g.com",
    });
};

app.use('*', notFoundHandler);
app.use(serverDrop)




function start(port) {
    app.listen(port, () => {
        console.log(`server is up and listen on ${port}`)
    });
}

module.exports = {
    start: start,
    app: app,
}