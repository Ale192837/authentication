import validateIfUsernameIsNotInUse from "./validateAccountData/validateUserName/validateIfUsernameIsNotInUse";
import validateEmail from "./validateAccountData/validateEmail/validateEmail";
import validatePassword from "./validateAccountData/validatePassword/validatePassword";
import validateAccountData from "./validateAccountData/validateAccountData";
import validateIfEmailIsNotInUse from "./validateAccountData/validateEmail/validateIfEmailIsNotInUse";

export default function validateAccountDataBuilder(data) {
    
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