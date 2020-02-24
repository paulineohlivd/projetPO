import React from "react";
import Thumbnail from './Thumbnail.js';
import './App.css';
 
function Project2(props) {
  return (
       // Render a Thumbnail component
    <div>
    <h1>Projects</h1>
    <Thumbnail
        link="/airbnb"
        image="https://images.unsplash.com/photo-1579493933703-70473cdf84f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
        title="Airbnb Experiences"
        category="Website"
    />
    </div>
  );
}   

export default Project2;