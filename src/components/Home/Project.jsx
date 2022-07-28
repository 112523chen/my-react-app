import React from 'react'
import { NavLink } from 'react-router-dom';

function Project() {
    return ( 
        <div className='project'>
            <h3 className='section-title'>Latest Project</h3>
            <NavLink to={"/recent_project"}><h4>Generic Travel Journal App</h4></NavLink>
            <p>Created an app that displays entries about travel destination using HTML, CSS, and React.js </p>
        </div>
     );
}

export default Project;