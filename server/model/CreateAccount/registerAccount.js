import setUser from "../databaseManager/setUser";

export default function registerAccount(data){

    let userSetted = setUser(data);
    
    return userSetted; 

}