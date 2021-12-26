import React from "react";
import './Navigation.css'

const Navigation = ({onRouteChange, isSignedIn}) => {
  if( isSignedIn){
    return(
      <nav>
        <p onClick={() => onRouteChange('signout')} className="signout">Sign Out</p>
      </nav>
    )
  }else{
    return(
      <nav>
        <p onClick={() => onRouteChange('signin')} className="signin">Sign In</p>
        <p onClick={() => onRouteChange('register')} className="register">Register</p>
      </nav>
    )

  }
 
}

export default Navigation;