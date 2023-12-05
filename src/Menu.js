import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css"; // Assurez-vous que le fichier CSS est correctement importé

function Menu({ toggleMenu }) {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenuState = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    const contactMenu = document.querySelector(".contactmenu");
    if (contactMenu) {
      contactMenu.classList.add("hidden");
    }

    // Ajoutez la classe de sortie pour le menu
    document.querySelector(".menu-collapse").classList.add("closing");

    // Attendez la fin de l'animation
    setTimeout(() => {
      toggleMenu();

      // Enlevez la classe de sortie après l'animation
      const menuCollapse = document.querySelector(".menu-collapse");
      if (menuCollapse) {
        menuCollapse.classList.remove("closing");
      }

      if (contactMenu) {
        contactMenu.classList.remove("hidden");
      }
    }, 400); // Réglez le délai pour correspondre à la durée de votre animation (0.4s)
  };

  return (
    <div className={`menu-collapse ${menuOpen ? "open" : "closed"}`}>
      <button onClick={closeMenu}>
        <img src="closem.png" className="iconclosemenu" alt="close button" />
      </button>
      <div>
        <Link to="/portfolio">
          <p>ACCUEIL</p>
        </Link>
      </div>
      <div>
        <Link to="/about">
          <p>A PROPOS</p>
        </Link>
      </div>
      <div>
        <Link to="/projects">
          <p>MES PROJETS</p>
        </Link>
      </div>
      <div>
        <Link to="mailto:seb.lourdel8@gmail.com">
          <button className="contactmenu">Contactez moi &nbsp;👋</button>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
