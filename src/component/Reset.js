import React, {useState} from 'react';
// import AuthenticateUser from './AuthenticateUser';

export default function Reset(props){

    const Password1Handler = (e) =>{
    }
    const Password2Handler = (e) =>{
    }
    const EmailHandler = (e) =>{
    }
    return(
        <div>
        <fieldset>
        <legend>Reset password</legend>
            <form>
                <label>Enter email ID</label><br/>
                <input type="email"  value={props.emailAuthntication} className="emailform" onChange={EmailHandler}/><br/><br/>
                <label>Choose password</label><br/>
                <input type="password" value ={props.pasw1} className = "emailform" onChange={Password1Handler}/><br/><br/>
                <label>Re-enter password</label>  <br/>
                <input type="password" value ={props.pasw2} className = "emailform" onChange={Password2Handler}/><br/><br/>
                <input type="submit" className="submitbutton" value="Register"/>
                
            </form>
        </fieldset>
        </div>
    )
} 
