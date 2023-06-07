'use strict'

function validation(name) {

        return (req, res, next) => {
            const name = req.query.name; 
            if (typeof name === "string" && isNaN(name)) {
                req.name = name;
                next();
            } else {
                next(`This is not a name: ${name}`);
            }
        };
    }
    

module.exports = validation;