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
        let userExists = axios.get(`http://localhost:9090/api/credential/get?username=${user}`)
                            .then(res=> res.status === 200? true : false)
                            .catch(e=> console.log(e));
     
        return userExists;
    }

    

}

export default new AuthenticateUser();