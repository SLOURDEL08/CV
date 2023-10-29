import React from 'react';
import '../App.css';
import Scrollauto from '../Scrollauto';

const ModalNinaC = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Ajoutez une classe pour le flou progressif

  return (
    <div className="modal-overlay">
      <div className="modal-content fade-in-bottom">
       <div className='cont-mod'>
        <span className='titlemodal'>Projet :</span><span className='titlemodalresp'>Nina Carducci</span><img src='photo-camera.png' alt='optimisation' className='imgtitlemodal'/>
       </div>
       <Scrollauto />
       <div className='desc-project'>
        <div>
          <p className='descontext'>J'ai collaboré avec la photographe Nina Carducci pour optimiser son site nina-carducci.github.io. Mon intervention a consisté en une <b className='bolddescproject'>optimisation globale du site</b>, englobant des <b className='bolddescproject'>améliorations des performances</b>, du <b className='bolddescproject'>référencement</b>, de l'<b className='bolddescproject'>accessibilité</b>, et de la résolution de problèmes techniques. J'ai également intégré des éléments pour améliorer le <b className='bolddescproject'>référencement local</b>, ainsi que des métadonnées pour optimiser le partage sur les réseaux sociaux.</p>
          </div>
        <div>
          <span className='actionspan'><img src='gear.png' alt='optimisation' className='titleactionimg'/>Actions à mener :</span>
          <ul className='listactions'>
            <li><img src='nounarrow.png' alt='optimisation' className='actionimg'/>Optimisation globale du site et de la structure</li>
            <li><img src='nounarrow.png' alt='optimisation' className='actionimg'/>Mise en place du référencement local Schema.org</li>
            <li><img src='nounarrow.png' alt='optimisation' className='actionimg'/>Ajout des métadonnées pour les réseaux sociaux</li>
            <li><img src='nounarrow.png' alt='optimisation' className='actionimg'/>Modifications liées à l'accessibilité du site</li>
            <li><img src='nounarrow.png' alt='optimisation' className='actionimg'/>Optimisation des images</li>
            <li><img src='nounarrow.png' alt='optimisation' className='actionimg'/>Minification JS & CSS</li>
            <li><img src='nounarrow.png' alt='optimisation' className='actionimg'/>Correction bug filtre et galerie JS</li>
            <li><img src='nounarrow.png' alt='optimisation' className='actionimg'/>Rapport perfomances Avant / Après</li>
            </ul>
        </div>
       </div>
       <div className='imgillucontain'>
          <img src='ninac.png' alt='optimisation' className='illuprojetweb'/>
        </div>

        <div className='grid-mod'>
          <div>
          <img src='nina-avant.png' alt='optimisation' className='gridimg'/>
          </div>
          <div>
          <img src='nina-apres.png' alt='optimisation' className='gridimg'/>
          </div>
        </div>
        <p className='title-rapport'>Rapport d'intervention :</p>
      </div>
      <button className="close-button" onClick={onClose}><img src='fermerwhite.png' className='closer' alt='nina carducci'/></button>

    </div>
  );
};

export default ModalNinaC;