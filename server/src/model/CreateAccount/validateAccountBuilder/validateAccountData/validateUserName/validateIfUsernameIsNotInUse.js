import thereUsernameInDatabase from '../../../../databaseManager/thereUsernameInDatabase';
const thereUsernameInDatabase = require("@model/databaseManager").getUser() 

export default function validateIfUsernameIsNotInUse(username) {


    let usernameInUse = thereUsernameInDatabase(username);

    return !usernameInUse;
    
}