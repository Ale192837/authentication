export default function getPassword(username) {

    return localStorage.getItem("password_" + username); 

}