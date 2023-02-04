const validateAccountBuilder = require('./validateAccountBuilder/validateAccountDataBuilder');
const registerAccount = require('./registerAccount');

const createAccount = async function (accountData) {
    
    // validate account data --------------------------------------------------
    
    let createAccountResponse;

    createAccountResponse = await validateAccountBuilder(accountData);
    let accountDataValid = createAccountResponse.accountDataValid;
    
    

    // register account -------------------------------------------------------

    let accountRegistered;

    if(accountDataValid){
        accountRegistered = await registerAccount(accountData);
    }
    else accountRegistered = false;

    createAccountResponse.accountRegistered = accountRegistered;
    
    return createAccountResponse;

}

module.exports = createAccount;