// import thereUsernameInDatabase from '../../../../databaseManager/thereUsernameInDatabase_local';
const thereUsernameInDatabase = require("@app/model/databaseManager/databaseManager").getUser() 

export default async function validateIfUsernameIsNotInUse(username) {


    let queryResponse = await thereUsernameInDatabase(username);
    let usernameNotInUse = (queryResponse == null);
    
    return usernameNotInUse;
    
}