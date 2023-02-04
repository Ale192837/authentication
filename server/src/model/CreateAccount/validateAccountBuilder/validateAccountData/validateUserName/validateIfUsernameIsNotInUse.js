// import thereUsernameInDatabase from '../../../../databaseManager/thereUsernameInDatabase_local';
const thereUsernameInDatabase = require("@model/databaseManager/databaseManager").getUser;

const validateIfUsernameIsNotInUse = async function(username) {


    let queryResponse = await thereUsernameInDatabase(username);
    let usernameNotInUse = (queryResponse == '');
    console.log(`usernameNotInUse ${usernameNotInUse}`)
    return usernameNotInUse;
    
}

module.exports = validateIfUsernameIsNotInUse;