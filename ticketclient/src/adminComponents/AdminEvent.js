import React, { useEffect } from 'react'
import { useState } from 'react';
function AdminEvents(){
    const [adminEvents,setAdminEvents] = useState([]);

    useEffect(()=>{
        let admin = localStorage.token
        fetch("http://localhost:3000/admin/events",{
            method:"POST",
            headers:{
                "X-CSRF-Token": '<%= form_authenticity_token.to_s %>',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({admin})
        })
        .then(response => response.json())
        .then(json => {
            if(json.message == "Success"){
                setAdminEvents(json.events)
            }
        })
    },[])

    function renderAdminEvents(){
        return adminEvents.map((eventDetails) =>{
            console.log(eventDetails);
            return(
                <div className="event-display"key={eventDetails.id}>
                <h3>{eventDetails.name} - {eventDetails.status}</h3>
                <p>{eventDetails.venue_name}-{eventDetails.location_name}</p>
                <p>{eventDetails.date}</p>
                <p>Category: {eventDetails.category_name}</p>
                <p>Capacity: {eventDetails.ticket_quantity}</p>
                
                </div>
            )
        })
    }

    return(
        <div>
            <h2>All Events</h2>
            {renderAdminEvents()}
        </div>
    )
}

export default AdminEvents;