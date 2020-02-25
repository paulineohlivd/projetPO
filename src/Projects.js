import React from "react";
import Thumbnail from './Thumbnail.js';
import './App.css';
 
function Projects(props) {
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
 
<Thumbnail
  link="/airbnb"
  image="https://images.unsplash.com/photo-1579493933703-70473cdf84f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
  title="Airbnb Experiences"
  category="Website"
/>
 
<Thumbnail
  link="/photoshop"
  image="https://images.unsplash.com/photo-1501704163333-86d3832cd4ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80"
  title="Photoshop Redesign"
  category="Desktop App"
/>
    </div>
  )
}
 
export default Projects;