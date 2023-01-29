const logger = require('@service/logger');

module.exports = (req, res, next) => {

    res.sendError = function(err, message, status = 500){
        
        logger.error({
            message,
            err,
            status
        })
        return this.status(status).send({message});
    
    }
    next();
}