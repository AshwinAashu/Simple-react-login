import React, {useState} from 'react';


const LandingPage = () =>{

    
    const logoutHandler=(event)=>{
        event.preventDefault();
        this.setState({loggedIn})
        this.props.history.push('/');
    }



    return <div>
        <h1> Login Successful </h1>
        <button onClick= {this.logoutHandler}>Logout</button>
    </div>
}

export  default LandingPage