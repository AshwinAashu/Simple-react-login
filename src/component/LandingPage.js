import React from 'react';



 const LandingPage = (props) =>{
    const userState = props.location.state;
    // const isLoggedIn = props.location.state.isLoggedIn;
    const handleLogout=(event, props)=>{
        event.preventDefault();
        console.log(userState.state.isLoggedIn);
    }
   

   

        return (
            <div>
                <h1> Login Successful {userState.state.user} </h1>
                {/* {console.log(props)} */}
                <button onClick =  {handleLogout} >Logout</button>
             </div>
        )
    
   
}

export  default LandingPage;