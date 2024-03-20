import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import NavBar from './NavBar';
const PrivateRoute = ({loggedIn,logout}) =>{
    let token = localStorage.token;
    ///let loggedIn = false;
    //if ( token.length > 0 && token !== "undefined" && token !='null') {
      //  loggedIn = true;
      //} else {
        //console.log('No token found, try logging in!');
      //}
    return(
        loggedIn ? <div><NavBar logout={logout}/><Outlet/> </div>: <Navigate to="/user/login"/>
    )
}
  

export default PrivateRoute;