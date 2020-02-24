import React from "react";
import Thumbnail from './Thumbnail.js';
import './App.css';
 
function Project3(props) {
  return (
       // Render a Thumbnail component
    <div>
    <h1>Projects</h1>
    <Thumbnail
  link="/photoshop"
  image="https://images.unsplash.com/photo-1501704163333-86d3832cd4ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80"
  title="Photoshop Redesign"
  category="Desktop App"
/>
    </div>
  );
} 

export default Project3;