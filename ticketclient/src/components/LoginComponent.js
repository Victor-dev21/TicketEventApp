import React, {Component} from 'react';
import { useEffect,useState } from 'react';
import { Navigate,useHistory} from 'react-router-dom';

function LoginComponent({setCurrentUser,setLoggedIn,loggedIn}){
    const[username,setUsername] = useState("")
    const[password,setPassword] = useState("");
    const [error,setError] = useState(false);
    const [success,setSuccess] = useState(false);
    
    function handleSubmit(e){
        e.preventDefault();
        const user = {username,password};
        console.log(user);
        return fetch("http://localhost:3000/login",{
            method:"POST",
            headers: {
                Accept: 'application/json',
                "X-CSRF-Token": '<%= form_authenticity_token.to_s %>',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({user})
        })
        .then(response => response.json())
        .then(data=> {
            if(data.message == "Success"){
                
                setCurrentUser(data.user)
                setSuccess(true);
                setLoggedIn(true);
                const userNamespace = 'user_';
                localStorage.setItem(userNamespace+"id",data.user_id);
                localStorage.setItem(userNamespace+"username",data.username);
                localStorage.setItem("role",data.role);
                localStorage.token = data.user_id
                
            }else if(data.message == "Error"){
                setError(true);
            }
        });
    }

    return(
        <div>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" onChange={(event) => setUsername(event.target.value)}/>
                </label>
                <label>
                    Password:
                    <input type="text" onChange={(event) => setPassword(event.target.value)}/>
                </label>
                <button type="submit">Log In</button>
            </form>
            {success?<Navigate to="/user/home"/>:null}
            {loggedIn?<Navigate to="/user/home"/>:null}
            
            <br/>
            Or Create an account 
            <a href="http://localhost:3001/register">
            <button>Register</button>
            </a>
        </div>
    )


} 

export default LoginComponent;