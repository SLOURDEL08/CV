import React, { useState } from "react";
import "../assets/css/App.css";
import FilterableProjects from "../components/filter/FilterableProjects";
import Menu from "../components/navigation/Menu";

function Projects() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Inverser l'état du menu
  };

  return (
    <div className="container-projects">
      <div className="fastmenupro">
        <div>
          <span className="majdatepro">Mise à jour le 20/03/2024</span>
        </div>
        <div>
          <span className="titlePropage">Mes Projets</span>
        </div>
        <div>
          <button onClick={toggleMenu}>
            <img
              src={process.env.PUBLIC_URL + "/images/more.png"}
              alt="navigation"
            />
          </button>
        </div>
      </div>
      <div className="projects-bg">
        <FilterableProjects />
      </div>
      {menuOpen && <Menu toggleMenu={toggleMenu} />}
    </div>
  );
}

export default Projects;
