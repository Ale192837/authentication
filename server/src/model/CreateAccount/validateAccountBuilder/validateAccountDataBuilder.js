const validateIfUsernameIsNotInUse = require("./validateAccountData/validateUserName/validateIfUsernameIsNotInUse");
const validateEmail = require("./validateAccountData/validateEmail/validateEmail");
const validatePassword = require("./validateAccountData/validatePassword/validatePassword");
const validateAccountData = require("./validateAccountData/validateAccountData");
const validateIfEmailIsNotInUse = require("./validateAccountData/validateEmail/validateIfEmailIsNotInUse");
// import validateIfEmailIsNotInUse from "./validateAccountData/validateEmail/validateIfEmailIsNotInUse";

const validateAccountDataBuilder = async function(data) {
    
    let response = {};

    var validateUsernameDecode = (data) => {
        
        if(data){
            
            response.usernameInUse = !validateIfUsernameIsNotInUse(data.username, response);
            
            return !response.usernameInUse;

        }
        else return false;
    };

    var validatePasswordDecode = (data) => {
        
        if(data){
            
            let passwordResponse = validatePassword(data.password, data.passwordConfirmation, response);
            response.passwordAndConfirmationAreEqual = passwordResponse.passwordAndConfirmationAreEqual;
            response.passwordValidCharactersOrNumberOfCharacters = passwordResponse.passwordValidCharactersOrNumberOfCharacters;

            var passwordValid = (response.passwordAndConfirmationAreEqual && response.passwordValidCharactersOrNumberOfCharacters);
            
            return passwordValid;

        }
        else return false;
    };
    
    var validateEmailDecode = (data) => {
        
        if(data){
            
            response.emailValid = validateEmail(data.email, response);
            response.emailInUse = validateIfEmailIsNotInUse(data.email, response);
            return (response.emailValid && !response.emailInUse);
            
        }
        else return false;
    }

    var validators = [
        
        (data) => validateUsernameDecode(data),
        (data) => validatePasswordDecode(data),
        (data) =>  validateEmailDecode(data)];

    var accountDataIsValid = validateAccountData(data, validators);
    
    response.accountDataValid = accountDataIsValid;

    return response;
}

module.exports = validateAccountDataBuilder;