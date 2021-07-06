import axios from 'axios';
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import AuthenticateUser from './AuthenticateUser';
// import AuthenticateUser from './AuthenticateUser';

export default function Reset(props){
    let history = useHistory();
    const [email, setEmail] =  useState("");
    const [pasw1, setPasw1]=   useState("");
    const [pasw2, setPasw2] = useState("");
    
    const Password1Handler = (e) =>{
        e.preventDefault();
        setPasw1(e.target.value);
    }
    const Password2Handler = (e) =>{
        e.preventDefault();
        setPasw2(e.target.value);
    }
    const EmailHandler = (e) =>{
        e.preventDefault();
        setEmail(e.target.value);
    }

    const handleSubmit = (e) =>{
        //check if the passwords match
        //upon submit check  if such an email exists
        // if true, update password
        // else alert that the email was not found
        e.preventDefault();
        let pasMatch = passMatchAuth(pasw1, pasw2);
        if(pasMatch){
            let userExists = AuthenticateUser.verifyEmail(email);
            if(userExists){
                axios.put(`http://localhost:9090/api/credential/update?username=${email}`, {
                    username: email,
                    password: pasw1,
            })
            alert("Your password has been updated. Log in to continue.");
            history.push("/");
            }else alert("Email does not exists");
        }else alert("Passwords don't match");
    }

    const passMatchAuth = (pasw1, pasw2)=>{
        if(pasw1===pasw2){
            return true;
        }else return false;
    }


    return(
        <div>
        <fieldset>
        <legend>Reset password</legend>
            <form onSubmit={handleSubmit}>
                <label>Enter email ID</label><br/>
                <input type="email"  value={props.emailAuthntication} className="emailform" onChange={EmailHandler}/><br/><br/>
                <label>Choose password</label><br/>
                <input type="password" value ={props.pasw1} className = "emailform" onChange={Password1Handler}/><br/><br/>
                <label>Re-enter password</label>  <br/>
                <input type="password" value ={props.pasw2} className = "emailform" onChange={Password2Handler}/><br/><br/>
                <input type="submit" className="submitbutton" value="Reset"/>
                
            </form>
        </fieldset>
        </div>
    )
} 
