import decrypt from "./utils/decrypt";

export default function getPassword(username) {

    let encryptedPassword = localStorage.getItem("password_" + username); 
    let password = decrypt(encryptedPassword);

    return password;

}