import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
const PublicRoutes = () =>{
  let auth = false;
  const token = localStorage.token;
        if (token && localStorage.admin_username && localStorage.role == "admin"){

          if ( token.length > 0 && token !== "undefined" && token !='null') {
            console.log("Admin is signed in ")
            auth = true;
          } else {
            console.log('No token found, try logging in!');
          }
        }
  
    return auth?<Navigate to="/admin/dashboard"/>:<Outlet/>
    
  
}
export default PublicRoutes;