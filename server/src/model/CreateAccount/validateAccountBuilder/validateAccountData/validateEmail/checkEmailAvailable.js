const checkEmailExistsDB = require('@model/databaseManager/databaseManager').checkEmailExists;

const checkEmailAvailable = async function(email) {

    let queryResponse = await checkEmailExistsDB(email);
    let emailNotInUse = (queryResponse == '');

    return emailNotInUse;
    
}

module.exports = checkEmailAvailable;