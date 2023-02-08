const validateIfUsernameIsNotInUse = require("./validateAccountData/validateUserName/checkUsernameAvailable");
const validateEmailCharacters = require("./validateAccountData/validateEmail/validateEmailCharacters");
const validatePassword = require("./validateAccountData/validatePassword/validatePassword");
const validateIfEmailIsNotInUse = require("./validateAccountData/validateEmail/checkEmailAvailable");

const validateAccountDataBuilder = async function(data) {
    
    let response = {};

    let usernameNotInUse = await validateIfUsernameIsNotInUse(data.username);
    response.usernameInUse = !usernameNotInUse;

    response.emailValidCharacters = validateEmailCharacters(data.email);
    let emailNotInUse = await validateIfEmailIsNotInUse(data.email);
    response.emailInUse = !emailNotInUse;

    let passwordResponse = validatePassword(data.password, data.passwordConfirmation);
    response.passwordValidCharactersOrNumberOfCharacters = passwordResponse.passwordValidCharactersOrNumberOfCharacters;

    let accountDataIsValid = (
        !response.usernameInUse &&
        !response.emailInUse &&
        response.emailValidCharacters &&
        response.passwordValidCharactersOrNumberOfCharacters
    );
    
    response.accountDataValid = accountDataIsValid;

    return response;
}

module.exports = validateAccountDataBuilder;