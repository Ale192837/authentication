// const comparePasswordAndConfirmation = require("./comparePasswordAndConfirmation/comparePasswordAndConfirmation");
const validatePasswordCharacters = require("./validateCharacters/validatePasswordCharacters");

const validatePassword = function(password, passwordConfirmation) {

    // let passwordAndConfirmationAreEqual = comparePasswordAndConfirmation(password, passwordConfirmation);
    let validCharacters = validatePasswordCharacters(password, passwordConfirmation);

    let response = {};
    // response.passwordAndConfirmationAreEqual = passwordAndConfirmationAreEqual;
    response.passwordValidCharactersOrNumberOfCharacters = validCharacters;

    return response;

}

module.exports = validatePassword;