const validatePasswordCharacters = require("./validateCharacters/validatePasswordCharacters");

const validatePassword = function(password, passwordConfirmation) {

    let validCharacters = validatePasswordCharacters(password, passwordConfirmation);

    let response = {};
    response.passwordValidCharactersOrNumberOfCharacters = validCharacters;

    return response;

}

module.exports = validatePassword;