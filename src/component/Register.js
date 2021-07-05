import React , {useState} from 'react';
import  {useHistory} from 'react-router-dom';
import axios from 'axios';

export default function Register(props){
    let history = useHistory();
    const [email, setEmail] =  useState("");
    const [pasw, setPasw] =   useState("");
    const [pasw1, setPasw1]=   useState("");
    const [pasw2, setPasw2] = useState("");

    const formSubmitHandler = (e) =>{
        e.preventDefault();
        //match if the two passwords are same , else give an alert
        if(pasw1 === pasw2){
            //passwords match so set the password in database to any of them
            PasswordHandler(pasw1);
        } else alert("Passwords don't match");  
        
    }
    const PasswordHandler= (pasw, pasw1)=>{
       //set password to the local password
        setPasw(pasw1);
        //now push the data to database and redirect to login page
        redirectHandler(pasw);
    }

    const redirectHandler =(pasw)=>{
        //post to the database and redirect to login page
        axios.post("http://localhost:9090/api/credential/createUser", {
        username : email,
        password: pasw,
        }).then(response=>{history.push("/")})
        .catch((e)=> console.log(e));
    }


    //set state of email to the one entered
    const EmailHandler = (e)=>{
        e.preventDefault();
        setEmail(e.target.value);
    }
    //set local password 1
    const Password1Handler = (e)=>{
        e.preventDefault();
        setPasw1(e.target.value);
    }
    //set local password2
    const Password2Handler = (e) =>{
        e.preventDefault();
        setPasw2(e.target.value);
    }


    return(
        <div>
            <fieldset>
                <legend>Register</legend>
                <form onSubmit={formSubmitHandler}>
                    <label>Enter your email</label><br/>
                    <input type="email" value={props.email} className="emailform" placeholder="abc@xyz.com" onChange={EmailHandler}/><br/>
                    <label> Choose a password </label><br/>
                    <input type="password" value ={props.pasw1} className = "emailform" onChange={Password1Handler}/><br/>
                    <label>Re-enter password</label>  <br/>
                    <input type="password" value ={props.pasw2} className = "emailform" onChange={Password2Handler}/><br/>
                    <input type="submit" className="submitbutton" value="Register"/>
                </form>
            </fieldset>
            <span><a href="/">Log In</a> instead </span>
        </div>
    );
}
