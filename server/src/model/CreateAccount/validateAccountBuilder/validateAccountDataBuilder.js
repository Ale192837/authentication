const validateIfUsernameIsNotInUse = require("./validateAccountData/validateUserName/validateIfUsernameIsNotInUse");
const validateEmailCharacters = require("./validateAccountData/validateEmail/validateEmailCharacters");
const validatePassword = require("./validateAccountData/validatePassword/validatePassword");
// const validateAccountData = require("./validateAccountData/validateAccountData");
const validateIfEmailIsNotInUse = require("./validateAccountData/validateEmail/validateIfEmailIsNotInUse");
// import validateIfEmailIsNotInUse from "./validateAccountData/validateEmail/validateIfEmailIsNotInUse";

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

    console.log(`DataBuilder response.accountDataValid ${accountDataIsValid}`);
    console.log(`DataBuilder response.usernameInUse ${response.usernameInUse}`);
    console.log(`DataBuilder response.emailValid ${response.emailValidCharacters}`);
    console.log(`DataBuilder response.emailInUse ${response.emailInUse}`);
    console.log(`DataBuilder response.passwordValidCharactersOrNumberOfCharacters ${response.passwordValidCharactersOrNumberOfCharacters}`);



    return response;
}

module.exports = validateAccountDataBuilder;