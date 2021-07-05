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
        
        if(pasw1 === pasw2){
            PasswordHandler(pasw1);
        } else alert("Passwords don't match");  
        
    }
    const PasswordHandler= (pasw, pasw1)=>{
       
        setPasw(pasw1);
        redirectHandler(pasw);
    }

    const redirectHandler =(pasw)=>{
      
        axios.post("http://localhost:9090/api/credential/createUser", {
        username : email,
        password: pasw,
        }).then(response=>{history.push("/")})
        .catch((e)=> console.log(e));
    }



    const EmailHandler = (e)=>{
        e.preventDefault();
        setEmail(e.target.value);
    }
    const Password1Handler = (e)=>{
        e.preventDefault();
        setPasw1(e.target.value);
    }

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
