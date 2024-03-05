import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
const PrivateRoute = () =>{
    let token = localStorage.token;
    let loggedIn = false;
    if ( token.length > 0 && token !== "undefined" && token !='null') {
        console.log(token);
        loggedIn = true;
      } else {
        console.log('No token found, try logging in!');
      }
    return(
        loggedIn ? <Outlet/> : <Navigate to="/login"/>
    )
}
  

export default PrivateRoute;