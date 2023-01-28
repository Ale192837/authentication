module.exports = (req, res, next) => {
    res.sendError = function(err){

        return this.err;
    
    }
    next();
}