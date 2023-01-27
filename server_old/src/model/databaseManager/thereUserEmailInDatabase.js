export default function thereUserEmailInDatabase(email) {

    return (localStorage.getItem("email_" + email) != null); 

}