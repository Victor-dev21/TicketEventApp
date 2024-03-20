import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import NavBar from '../adminComponents/NavBar';
const PrivateRoutes = () =>{
    let auth  = false
    const token = localStorage.token;
        if (token && localStorage.admin_username && localStorage.role == "admin"){

          if ( token.length > 0 && token !== "undefined" && token !='null') {
            console.log("Admin is signed in ")
            //setLoggedIn(true);
            auth = true
          } else {
            console.log('No token found, try logging in!');
          }
        }
    return(
        auth ? <Outlet/> : <Navigate to="/admin/login"/>
    )
    
    
}
// check what the return should be instead of having the navigate 
export default PrivateRoutes;