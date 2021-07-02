import React from 'react';

function Register(props){
    return(
        <div>
            <fieldset>
                <legend>Register</legend>
                <form>
                    <label>Enter your email</label><br/>
                    <input type="email" value={props.email} className="emailform" placeholder="abc@xyz.com"/><br/>
                    <label> Choose a password </label><br/>
                    <input type="password" value ={props.pasw1} className = "emailform" /><br/>
                    <label>Re-enter password</label>  <br/>
                    <input type="password" value ={props.pasw2} className = "emailform" /><br/>
                    <input type="submit" className="submitbutton" value="Register"/>
                </form>
            </fieldset>
        </div>
    );
}

export default Register;
