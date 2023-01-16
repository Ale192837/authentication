import comparePasswordAndConfirmation  from "./comparePasswordAndConfirmation/comparePasswordAndConfirmation";
import validatePasswordCharacters from "./validateCharacters/validatePasswordCharacters";

function validatePassword(password, passwordConfirmation) {

    let passwordAndConfirmationAreEqual = comparePasswordAndConfirmation(password, passwordConfirmation);
    let validCharacters = validatePasswordCharacters(password, passwordConfirmation);

    response.passwordAndConfirmationAreEqual = passwordAndConfirmationAreEqual;
    response.passwordValidCharactersOrNumberOfCharacters = validCharacters;

    return response;

}

module.exports = validatePassword;