export default function setUser(data){

    localStorage.setItem("username_" + data.username , data.username);
    localStorage.setItem("email_" + data.email, data.email);
    localStorage.setItem("password_"  + data.username, data.password);
    
    return true; 

}