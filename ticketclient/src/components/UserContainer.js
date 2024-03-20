import React, {Component} from "react";
import RegisterComponent from './RegisterComponent.js';
import LoginComponent from './LoginComponent.js'
import HomeComponent from './HomeComponent.js'
import ErrorComponent from './ErrorComponent.js'
import { useEffect,useState } from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes,Navigate} from 'react-router-dom';
import PrivateRoute from './PrivateRoutes.js';
import NavBar from './NavBar.js'
function UserContainer(){
const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  
  console.log(loggedIn);
  useEffect(() => {
    const token = localStorage.token;
    if (token && localStorage.getItem("username") && localStorage.getItem("role") =="user"){
      if ( token.length > 0 && token !== "undefined" && token !='null') {
        
        setLoggedIn(true);
      } else {
        console.log('No token found, try logging in!');
      }
    }
   
  },[]);

  function logout(){
    
    setUser({});
    setLoggedIn(false);
    localStorage.token = null;
    localStorage.user_id= null;
    localStorage.user_username= null;

    
  }
  // {loggedIn?<NavBar logout={logout}/>:null}
    return(
      
        <div>
          
        
        <Router>
          <Routes>
            <Route exact path="/user/register" element={<RegisterComponent loggedIn={loggedIn}/>}/>
            <Route exact path="/user/login" element={<LoginComponent loggedIn={loggedIn}setLoggedIn={setLoggedIn}setCurrentUser={setUser}/>}/>
            </Routes>

            <Routes>
            
            <Route element={<PrivateRoute loggedIn={loggedIn} logout={logout}/>}>
              <Route element={<HomeComponent/>} path="/user/home" exact/>
            </Route>
          </Routes>
        </Router>
        </div>
        
      )
}

export default UserContainer;