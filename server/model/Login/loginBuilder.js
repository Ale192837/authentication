import login from "./login";
import getPassword from "../databaseManager/getPassword";

export default function loginBuilder(username, password){

    let logged = login(username, password, getPassword);

    return logged;

}