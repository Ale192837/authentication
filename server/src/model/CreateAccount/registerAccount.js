// import setUser from "../databaseManager/setUser";
// const setUser = require("@model/setUser");
const setUser = require("@model/databaseManager/databaseManager").setUser;

const registerAccount = function(data){

    let userSetted = setUser(data.username, data.password, data.email);
    console.log("user $data.username registered");
    
    return userSetted; 

}

module.exports = registerAccount;