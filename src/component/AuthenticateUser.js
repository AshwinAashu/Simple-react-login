import axios from 'axios';


class AuthenticateUser{
    registerUser(user, password){
        // console.log("authentication done");
        sessionStorage.setItem('authenticatedUser', user);
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser');
    }

    verifyEmail(user){
        //verify if an email ID exists 
        // axios.get(`http://localhost:9090/api/credential/get?username=${user}`)
    }

    

}

export default new AuthenticateUser();