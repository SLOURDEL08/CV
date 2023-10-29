import React from 'react';
import '../App.css';
import Scrollauto from '../Scrollauto';

const ModalKasa = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Ajoutez une classe pour le flou progressif

  return (
    <div className="modal-overlay">
      <div className="modal-content fade-in-bottom">
       <div className='cont-mod'>
        <span className='titlemodal'>Projet :</span><span className='titlemodalresp'>KASA</span><img src='eco-house.png' alt='optimisation' className='imgtitlemodal'/>
       </div>
       <Scrollauto />
       <div className='desc-project'>
        <div>
          <p className='descontext'>Ce projet implique la création du frontend de l'application en suivant les maquettes Figma, utiliser la logique de composant pour réutiliser plusieurs fois certaines fonctionnalités. Le backend n'étant pas développé un fichier JSON nous permet de géneré plusieurs logements en location et donc gérer l'intégration avec les futurs données.</p>
          </div>
        <div>
          <span className='actionspan'><img src='gear.png' alt='optimisation' className='titleactionimg'/>Actions à mener :</span>
          <ul className='listactions'>
            <li><img src='nounarrow.png' alt='optimisation' className='actionimg'/>Développez le Front END</li>
            <li><img src='nounarrow.png' alt='optimisation' className='actionimg'/>Gérer React router</li>
            <li><img src='nounarrow.png' alt='optimisation' className='actionimg'/>Utilisez les components</li>
            <li><img src='nounarrow.png' alt='optimisation' className='actionimg'/>Utilisez SASS</li>
            <li><img src='nounarrow.png' alt='optimisation' className='actionimg'/>Intégrer le backend</li>
            <li><img src='nounarrow.png' alt='optimisation' className='actionimg'/>Création Slider & Collapse</li>
            <li><img src='nounarrow.png' alt='optimisation' className='actionimg'/>Responsive</li>
            </ul>
        </div>
       </div>
       <div className='imgillucontain'>
          <img src='home-kasa.png' alt='optimisation' className='illuprojetweb'/>
        </div>

        <div className='grid-mod'>
          <div>
          <img src='location-kasa.png' alt='optimisation' className='gridimg'/>
          </div>
          <div>
          <img src='about-kasa.png' alt='optimisation' className='gridimg'/>
          </div>
        </div>
      </div>
      <button className="close-button" onClick={onClose}><img src='fermerwhite.png' className='closer' alt='nina carducci'/></button>

    </div>
  );
};

export default ModalKasa;