const createAccount = require('@model/CreateAccount/createAccount');

const createAccountController = {

    async createAccount(req, res) {
    
        let response = await createAccount(req.body);
        res.send(response);
       
    }
}

module.exports = createAccountController;