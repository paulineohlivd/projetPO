import React from "react";
import Thumbnail from './Thumbnail.js';
import './App.css';
 
function Project1(props) {
  return (
       // Render a Thumbnail component
    <div>
    <h1>Projects</h1>
    <Thumbnail
        link="/twitter"
        image="https://images.unsplash.com/photo-1551817958-d9d86fb29431?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        title="Twitter Newsfeed"
        category="Mobile App"
    />
    </div>
  );
}   

export default Project1;
