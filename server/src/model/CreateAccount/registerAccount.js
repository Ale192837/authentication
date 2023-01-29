// import setUser from "../databaseManager/setUser";
const setUser = require("@model/setUser");

export default function registerAccount(data){

    let userSetted = setUser(data);
    
    return userSetted; 

}