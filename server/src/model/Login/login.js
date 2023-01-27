export default function login(username, password, searchPasswordInDatabase){

   

    let passwordInDatabase = searchPasswordInDatabase(username);

    if(passwordInDatabase == null){
        return false;
    }

    let passwordMatch = (password == passwordInDatabase);
    
    return passwordMatch;


}