const thereUsernameInDatabase = require("@model/databaseManager/databaseManager").getUser;

const checkUsernameAvailable = async function(username) {


    let queryResponse = await thereUsernameInDatabase(username);
    let usernameNotInUse = (queryResponse == '');
    return usernameNotInUse;
    
}

module.exports = checkUsernameAvailable;