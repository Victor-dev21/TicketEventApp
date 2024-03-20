import React, {Component} from "react";
import { useEffect,useState } from 'react';
import { Navigate} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function AdminLoginComponent({setLoggedIn,loggedIn}){
    const [username,setUsername] = useState("");
    const[password,setPassword] = useState("");
    const navigate = useNavigate();
    console.log("Inside the log in component")
    console.log(loggedIn)
    
    function handleSubmit(event){
        event.preventDefault();
        console.log("Inside the handle submit ")
        const admin = {username,password};
        
         fetch("http://localhost:3000/admin/login",{
            method: "POST",
            headers:{
                "X-CSRF-Token": '<%= form_authenticity_token.to_s %>',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({admin})
        })
        .then(response =>response.json())
        .then( json => {
            if(json.message == "Success"){
                console.log("success")
                setLoggedIn(true)
                const adminNamespace = 'admin_';
                localStorage.setItem(adminNamespace+"id",json.admin);
                localStorage.setItem(adminNamespace+"username",json.username);
                localStorage.setItem("role","admin");
                localStorage.token = json.admin
                navigate("/admin/dashboard")
                
            }
        })
        .catch(error => console.log(error))
        
    }

    const handleUsername = (event) => {
        setUsername(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }
    return(
        
        <div>
            <h1>Log in(Admin)</h1>
            <form onSubmit={event => handleSubmit(event)}>
                <label>
                    Username:
                    <input type="text" onChange={handleUsername}/> 
                </label>
                <label>
                    Password:
                    <input type="password"onChange={handlePassword}/> 
                </label>

                <button type="submit">Log in</button>

            </form>
        </div>
    
    )
}

export default AdminLoginComponent;