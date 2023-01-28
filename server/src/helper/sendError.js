const logger = require('@service/logger');

module.exports = (req, res, next) => {

    res.sendError = function(err){
        
        logger.error({
            err
        })
        return this.err;
    
    }
    next();
}