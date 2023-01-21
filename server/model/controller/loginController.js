import loginBuilder from '../Login/loginBuilder';

export default class loginController{
    
    constructor() {
        
        this.logged = "";

    }

    login(data) {
        
        if(data){

            this.logged = loginBuilder(data.username, data.password);
            console.log("controller logged: " + this.logged);

        }

    }
    
   
}