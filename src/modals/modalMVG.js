import React from 'react';
import '../App.css';
import Scrollauto from '../Scrollauto';

const ModalMVG = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Ajoutez une classe pour le flou progressif

  return (
    <div className="modal-overlay">
      <div className="modal-content fade-in-bottom">
       <div className='cont-mod'>
        <span className='titlemodal'>Projet :</span><span className='titlemodalresp'>MonVieuxGrimoire</span><img src='eco-house.png' alt='optimisation' className='imgtitlemodal'/>
       </div>
       <Scrollauto />
       <div className='desc-project'>
        <div>
          <p className='descontext'>La mission implique le développement du back-end d'un site web de notation de livres. Le projet comprend la création d'une API pour permettre aux utilisateurs d'ajouter des livres et de donner des notations, visibles par le public. Il est également nécessaire d'optimiser les images téléchargées par les utilisateurs, conformément aux principes du Green Code.</p>
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
          <img src='homegrim.png' alt='optimisation' className='illuprojetweb'/>
        </div>

        <div className='grid-mod'>
          <div>
          <img src='addgrim.png' alt='optimisation' className='gridimg'/>
          </div>
          <div>
          <img src='conecgrim.png' alt='optimisation' className='gridimg'/>
          </div>
        </div>
      </div>
      <button className="close-button" onClick={onClose}><img src='fermerwhite.png' className='closer' alt='nina carducci'/></button>

    </div>
  );
};

export default ModalMVG;