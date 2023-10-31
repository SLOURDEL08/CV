import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Menu({ toggleMenu }) {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenuState = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    // Ajoutez la classe de sortie
    document.querySelector('.menu-collapse').classList.add('closing');
    // Attendez la fin de l'animation
    setTimeout(() => {
      toggleMenu();
      // Enlevez la classe de sortie après l'animation
      document.querySelector('.menu-collapse').classList.remove('closing');
    }, 400); // Réglez le délai pour correspondre à la durée de votre animation (0.4s)
  };

  return (
    <div className={`menu-collapse ${menuOpen ? 'open' : 'closed'}`}>
    <button onClick={closeMenu}>
      <img src='closem.png' className='iconclosemenu' alt='close button' />
    </button>
      <div>
        <Link href='/portfolio'><p>ACCUEIL</p></Link>
      </div>
      <div>
      <Link href='/about'><p>A PROPOS</p></Link>
      </div>
      <div>
      <Link href='/portfolio'><p>MES PROJETS</p></Link>
      </div>
      <div>
        <button className='contactmenu'>Contactez moi &nbsp;👋</button>
      </div>
    </div>
  );
}

export default Menu;
