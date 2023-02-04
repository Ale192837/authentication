const thereEmailInDatabase = require('@model/databaseManager/databaseManager').getEmail;

const  validateIfEmailIsNotInUse = async function(email) {

    let queryResponse = await thereEmailInDatabase(email);
    let emailNotInUse = (queryResponse == null);

    console.log("query email: " + emailNotInUse);

    return emailNotInUse;
    
}

module.exports = validateIfEmailIsNotInUse;