// import setUser from "../databaseManager/setUser";
const setUser = require("@model/setUser");

const registerAccount = function(data){

    let userSetted = setUser(data);
    
    return userSetted; 

}

module.exports = registerAccount;