const setUser = require("@model/databaseManager/databaseManager").setUser;
const getUser = require("@model/databaseManager/databaseManager").getUser;

const registerAccount = async function(data){

    await setUser(data.username, data.password, data.email);
    let user = await getUser(data.username);
    let userRegistered = (user != '');

    return userRegistered; 

}

module.exports = registerAccount;