'use strict';

function serverDrop (error,req,res,next){
    res.status(500).send({
        code: 500,
        route: req.path,
        message: `Server Error: ${error.message || error}`,
    });
}

module.exports = serverDrop;