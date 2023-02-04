// let setUser = require("@app/model/databaseManager/databaseManager").setUser;
const createAccount = require('@model/CreateAccount/createAccount');

const createAccountController = {

    async createAccount(req, res) {
    
        let username = req.body.username;
        // let password = req.body.password;

        console.log(username);
        // console.log(username, password);
        // let response = await setUser(username, password);
        
        // this.accountRegistered = response.accountRegistered; 
        // this.passwordAndConfirmationAreEqual = response.passwordAndConfirmationAreEqual; 
        // this.passwordValidCharactersOrNumberOfCharacters = response.passwordValidCharactersOrNumberOfCharacters; 
        // this.emailValid = response.emailValid; 
        // this.accountDataValid = response.accountDataValid; 
        // this.usernameInUse = response.usernameInUse;
        // this.emailInUse = response.emailInUse;

        let response = await createAccount(req.body);
    
        res.send(response);
    
        // debug
        // Object.entries(this).forEach(field => {
        //     const [key, value] = field;
        //     console.log(key, value);
        // });
       
    }
}

module.exports = createAccountController;