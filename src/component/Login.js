import React, { Component} from 'react';
import  axios from 'axios';
import { Route, Redirect } from 'react-router';
// import LandingPage from './LandingPage';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            email: "",
            pasw : "",
            loggedIn :  false,
        }
        // this.setState =  this.setState.bind(this);
    }

    emailHandler=(e)=>{
        e.preventDefault();
        this.setState({email : e.target.value});
    }

    pswHandler = (e) =>{
        e.preventDefault();
        this.setState({pasw : e.target.value});
    }
    
       
    

    submitHandler = (e)=> {
        e.preventDefault();
        //should call the authenticate function 
        //using axios  to see if we can get username directly
        const LOCAL_DATA= {
            user : this.state.email,
            password: this.state.pasw, 
        }
        //get response from the backend server  
        axios.get(`http://localhost:9090/api/credential/get?username=${LOCAL_DATA.user}`)
        .then(res => {
            if(LOCAL_DATA.password === res.data.password){
                //set loggedin to true
                this.setState({loggedIn: true});
                this.props.history.push(`/profile/${LOCAL_DATA.user}`);
            
            }
            else alert("Email or password incorrect");
        
        })
        .catch((e)=> console.log(e));

        
    
    }


    render(){
        return(
            <div>
                <h1>Login to continue</h1>
                <form onSubmit = {this.submitHandler}>
                    <input onChange = { this.emailHandler } type="email" value={this.state.email} className="emailform" placeholder="abc@xyz.com"/>  <br/>
                    <input onChange = {this.pswHandler} type="password" name="password" className="emailform" value={this.state.pasw} placeholder="Password"/> <br/>
                    <input type="submit" className="submitbutton" value="LogIn"/>
                </form>
            </div>
        )
    }
}

export default Login