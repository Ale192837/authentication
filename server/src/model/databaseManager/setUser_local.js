import encrypt from "../../helper/crypto/encrypt";

export default function setUser(data){

    let encryptedPassword = data.password;

    localStorage.setItem("username_" + data.username , data.username);
    localStorage.setItem("email_" + data.email, data.email);
    localStorage.setItem("password_"  + data.username, encryptedPassword);
    
    return true; 

}