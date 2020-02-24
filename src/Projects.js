import React from "react";
import Thumbnail from './Thumbnail.js';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Project1 from './Project1.js';
import Project2 from './Project2.js';
import Project3 from './Project3.js';

import './App.css';
 
function Projects(props) {
  return (
    <BrowserRouter>
        <div className="project">
        <Route path="/project1" component={Project1} />
        <Route path="/project2" component={Project2} />
        <Route path="/project3" component={Project3} />

        <Link to="/project1" className="item">Project1</Link>
        <Link to="/project2" className="item">Project2</Link>
        <Link to="/project3" className="item">Project3</Link>

        </div>

    </BrowserRouter>
  );
}
 
export default Projects;