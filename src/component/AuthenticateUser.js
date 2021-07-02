class AuthenticateUser{
    registerUser(user, password){
        // console.log("authentication done");
        sessionStorage.setItem('authenticatedUser', user);
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser');
    }

    

}

export default new AuthenticateUser();