import React, {Component} from 'react';
import { useEffect,useState } from 'react';
import TestComponent from './testComponent'
import { Navigate,useHistory} from 'react-router-dom';

const USER_SIGN_IN = "http://localhost:3000/users"

function RegisterComponent(){ 
    const [username,setUsername] = useState("");
    const[password,setPassword] = useState("");
    const [created, setCreated] = useState(false);
    const [error, setError] = useState(false);
    
    function handleSubmit (event) {
        event.preventDefault();
        event.target.reset();
        console.log(username);
        console.log(password);
        const user = { username, password };
        return fetch("http://localhost:3000/register",{
            method:"POST",
            headers : {
                "X-CSRF-Token": '<%= form_authenticity_token.to_s %>',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({user})
        })
        .then(response => response.json())
        .then(json => {
            if (json.message =="Success"){
                console.log("Success");
                setCreated(true)
            }})
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
                
                <h1>Create Account</h1>
                <form onSubmit={event => handleSubmit(event)}>
                    <label>
                        Username:
                        <input type="text" onChange={handleUsername}/> 
                    </label>
                    <label>
                        Password:
                        <input type="password"onChange={handlePassword}/> 
                    </label>

                    <button type="submit">Create</button>

                </form>
                {created?<Navigate to="/login"/>:null}
            </div>
        )
}

export default RegisterComponent;