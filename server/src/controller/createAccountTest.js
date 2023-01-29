let setUser = require("@model/setUser");

const createAccountController = {

    createAccount(req, res) {
    
        let username = req.body.username;
        let password = req.body.password;

        console.log(username, password);
        let response = setUser(global.connection, username, password);
        
        // this.accountRegistered = response.accountRegistered; 
        // this.passwordAndConfirmationAreEqual = response.passwordAndConfirmationAreEqual; 
        // this.passwordValidCharactersOrNumberOfCharacters = response.passwordValidCharactersOrNumberOfCharacters; 
        // this.emailValid = response.emailValid; 
        // this.accountDataValid = response.accountDataValid; 
        // this.usernameInUse = response.usernameInUse;
        // this.emailInUse = response.emailInUse;
    
        res.send("user created");
    
        // debug
        // Object.entries(this).forEach(field => {
        //     const [key, value] = field;
        //     console.log(key, value);
        // });
       
    }
}

module.exports = createAccountController;