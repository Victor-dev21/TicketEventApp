import React, {Component} from "react";
import AdminRegisterComponent from "./AdminRegisterComponent";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import { useEffect,useState } from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes,Navigate} from 'react-router-dom';
import AdminDashboard from "./AdminDashboard";
import AdminLoginComponent from "./AdminLoginComponent";
import NavBar from "./NavBar";
import EventContainer from "./EventContainer";
import AdminEvents from "./AdminEvent";
function AdminContainer(){
    const [admin, setAdmin] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
       
      function logout(){
        console.log("Inside the logout")
        setAdmin({});
        setLoggedIn(false);
        localStorage.token = null;
        localStorage.admin_id = null;
        localStorage.admin_username = null;
        localStorage.username = null;
        localStorage.role = null;
 
      }
      console.log(loggedIn)
    return(
        <div>
          
            <Router>
              
              
                <Routes>
                <Route element={<PublicRoutes />}>
                    <Route element={<AdminRegisterComponent/>} path="/admin/register" exact/>
                    <Route element={<AdminLoginComponent setLoggedIn={setLoggedIn}loggedIn={loggedIn}/>} path="/admin/login" exact/>
                    </Route>
                

                
                <Route element={<PrivateRoutes />}>
                  <Route element={<NavBar logout={logout}/>}>
                      <Route element={<AdminDashboard/>} path="/admin/dashboard" exact/>
                      <Route element={<AdminEvents/>} path="/admin/events" exact/>
                      <Route element={<EventContainer/>} path="/admin/event/new" exact/>
                  </Route>
                </Route>
              </Routes>
            </Router>
            
        </div>
    )
}
export default AdminContainer;