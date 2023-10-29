import './App.css';
import React from 'react';
import FilterableProjects from './FilterableProjects'


function Projects() {
  return (
    <div className="container-projects">
      <div className='projects-bg'>
        <FilterableProjects />
      </div>
    </div>
    
  );
}

export default Projects;
