export default function thereUsernameInDatabase(username) {

    return (localStorage.getItem("username_" + username) != null); 

}