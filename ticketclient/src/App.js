
import './App.css';
import React, { Component } from 'react';
import UserContainer from './components/UserContainer.js';
import AdminContainer from './adminComponents/AdminContainer.js';
function App (){
  
    return(
      <div>
      <UserContainer />
      <AdminContainer />
     </div>
      
    )
}
export default App;
