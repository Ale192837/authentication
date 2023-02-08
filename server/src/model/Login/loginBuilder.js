import login from "./login";
const getPassword = require("../databaseManager/databaseManager").getUser;



export default function loginBuilder(username, password){

    let logged = login(username, password, getPassword);

    return logged;

}