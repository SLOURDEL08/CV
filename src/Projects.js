import React, { useState } from 'react';
import './App.css';
import FilterableProjects from './FilterableProjects';
import Menu from './Menu';

function Projects() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Inverser l'état du menu
  };

  return (
    <div className="container-projects">
      <div className='fastmenupro'>
        <span>Mise à jour le 29/09/2023</span>
        <span>Mes Projets</span>
        <button onClick={toggleMenu}><img src='more.png' alt='navigation' /></button>
      </div>
      <div className='projects-bg'>
        <FilterableProjects />
      </div>
      {menuOpen && <Menu toggleMenu={toggleMenu} />}
    </div>
  );
}

export default Projects;
