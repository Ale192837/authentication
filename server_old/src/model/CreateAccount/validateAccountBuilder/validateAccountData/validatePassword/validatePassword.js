import comparePasswordAndConfirmation  from "./comparePasswordAndConfirmation/comparePasswordAndConfirmation";
import validatePasswordCharacters from "./validateCharacters/validatePasswordCharacters";

export default function validatePassword(password, passwordConfirmation) {

    let passwordAndConfirmationAreEqual = comparePasswordAndConfirmation(password, passwordConfirmation);
    let validCharacters = validatePasswordCharacters(password, passwordConfirmation);

    let response = {};
    response.passwordAndConfirmationAreEqual = passwordAndConfirmationAreEqual;
    response.passwordValidCharactersOrNumberOfCharacters = validCharacters;

    return response;

}