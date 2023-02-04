const thereEmailInDatabase = require('@model/databaseManager/databaseManager').getEmail;

const validateIfEmailIsNotInUse = async function(email) {

    let queryResponse = await thereEmailInDatabase(email);
    let emailNotInUse = (queryResponse == '');

    return emailNotInUse;
    
}

module.exports = validateIfEmailIsNotInUse;