
import './App.css';
import React, { Component } from 'react';
import RegisterComponent from './components/RegisterComponent.js';
import LoginComponent from './components/LoginComponent.js'
import HomeComponent from './components/HomeComponent.js'
import ErrorComponent from './components/ErrorComponent.js'
import { useEffect,useState } from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoutes.js';
import NavBar from './components/NavBar.js'
function App (){
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  
  console.log(loggedIn);
  useEffect(() => {
    const token = localStorage.token;
    
    if ( token.length > 0 && token !== "undefined" && token !='null') {
      console.log(token);
      setLoggedIn(true);
    } else {
      console.log('No token found, try logging in!');
    }
  }, []);

  function logout(){
    console.log("In here")
    setUser({});
    setLoggedIn(false);
    localStorage.token = null;
  }
    return(
      <div>
       {loggedIn?<NavBar logout={logout}/>:null}
      <Router>
        <Routes>
          <Route exact path="/register" element={<RegisterComponent/>}/>
          <Route exact path="/login" element={<LoginComponent setLoggedIn={setLoggedIn}setCurrentUser={setUser}/>}/>
          <Route element={<PrivateRoute />}>
            <Route element={<HomeComponent/>} path="/home" exact/>
          </Route>
        </Routes>
      </Router>
      </div>
      
    )
}
export default App;
