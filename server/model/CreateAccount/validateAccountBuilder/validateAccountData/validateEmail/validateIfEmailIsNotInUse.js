export default function validateIfEmailIsNotInUse(email, searchEmailInDatabase) {

    let emailInUse = searchEmailInDatabase(email);

    return emailInUse;
    
}