const thereEmailInDatabase = require('@model/databaseManager/databaseManager').getEmail();

export default async function validateIfEmailIsNotInUse(email) {

    let queryResponse = await thereEmailInDatabase(email);
    let emailNotInUse = (queryResponse == null);

    console.log("query email: " + emailNotInUse);

    return emailNotInUse;
    
}