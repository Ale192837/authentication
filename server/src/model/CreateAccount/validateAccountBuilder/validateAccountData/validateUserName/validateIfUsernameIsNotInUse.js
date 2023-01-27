import thereUsernameInDatabase from '../../../../databaseManager/thereUsernameInDatabase';

export default function validateIfUsernameIsNotInUse(username) {


    let usernameInUse = thereUsernameInDatabase(username);

    return !usernameInUse;
    
}