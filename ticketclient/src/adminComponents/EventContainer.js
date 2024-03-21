import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

function EventContainer(){
    const [venues,setVenues] = useState([]);
    const [categories,setCategories] = useState([]);
    const[name,setName] = useState("");
    const[category,setCategory] = useState("");
    const[date,setDate] = useState("");
    const[venue,setVenue] = useState("");
    const navigate = useNavigate();
    useEffect(()=>{
      
      fetch("http://localhost:3000/v1/venues")
      .then(resp => resp.json())
      .then(data => setVenues(data.venues))
      fetch("http://localhost:3000/v1/categories")
      .then(resp => resp.json())
      .then(data => setCategories(data.categories))
    },[])
    function renderVenues(){
      return venues.map((venue) => <option key={venue.id} value={venue.id}>{venue.name} - capacity ({venue.capacity})</option>);
    }
    function renderCategories(){
      return categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>);
    }
    console.log(venues)

    function handleSubmit(event){
      event.preventDefault();
      let token = localStorage.token;
      let eventInformation = {name,category,date,venue,token}
      fetch("http://localhost:3000/admin/event",{
        method:"POST",
        headers:{
          "X-CSRF-Token": '<%= form_authenticity_token.to_s %>',
                'Content-Type':'application/json'
        },
        body:JSON.stringify({eventInformation})
      })
      .then(response =>response.json())
      .then( json => {
          if(json.message == "Success"){
              console.log("Success")
              navigate("/admin/dashboard")
          }
      })
      .catch(error => console.log(error))
    }
    return(
        <div className="event-form">
           <h2>Add an event</h2>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Event</Form.Label>
        <Form.Control onChange={event=>setName(event.target.value)} type="text" name="event"placeholder="Enter event name" />
        <Form.Text  className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
      <Form.Label>Venue</Form.Label>
      <Form.Select onChange={event=>setVenue(event.target.value)}aria-label="Default select example">
        <option>Select venue</option>
        {renderVenues()}
      </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label>Category</Form.Label>
      <Form.Select onChange={event=>setCategory(event.target.value)}aria-label="Default select example">
        <option>Select category</option>
        {renderCategories()}
      </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
      <Form.Label>Set date for event</Form.Label>
        <Form.Control onChange={event=>setDate(event.target.value)}type="date" label="Select date for event" />
      </Form.Group>

      
      
      
      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    )
}

export default EventContainer;