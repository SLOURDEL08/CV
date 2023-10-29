import React from 'react';
import '../App.css';
import Scrollauto from '../Scrollauto';

const ModalSophieBluel = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Ajoutez une classe pour le flou progressif

  return (
    <div className="modal-overlay">
      <div className="modal-content fade-in-bottom">
       <div className='cont-mod'>
        <span className='titlemodal'>Projet :</span><span className='titlemodalresp'>Sophie Bluel</span><img src='design.png' alt='optimisation' className='imgtitlemodal'/>
       </div>
       <Scrollauto />
       <div className='desc-project'>
        <div>
          <p className='descontext'>Ma mission consistait à intervenir dans le cadre du projet Front du site pour répondre à trois besoins spécifiques. Tout d'abord, <b className='bolddescproject'>j'ai été chargé de développer la page de présentation des travaux</b> de l'architecte en utilisant le HTML fourni comme point de départ. Ensuite, ma tâche était de <b className='bolddescproject'>créer la page de connexion de l'administrateur</b> du site à partir de zéro. Enfin, j'ai eu pour mission de <b className='bolddescproject'>concevoir une modale</b> permettant d'uploader de nouveaux médias, à partir de zéro également. </p>
          </div>
        <div>
          <span className='actionspan'><img src='gear.png' alt='optimisation' className='titleactionimg'/>Actions à mener :</span>
          <ul className='listactions'>
            <li><img src='nounarrow.png' alt='optimisation' className='actionimg'/>Page de présentation</li>
            <li><img src='nounarrow.png' alt='optimisation' className='actionimg'/>Page de connexion administrateur</li>
            <li><img src='nounarrow.png' alt='optimisation' className='actionimg'/>Modal CRUD</li>
            </ul>
        </div>
       </div>
       <div className='imgillucontain'>
          <img src='sophieb.png' alt='optimisation' className='illuprojetweb'/>
        </div>

        <div className='grid-mod'>
          <div>
          <img src='barreadmin.png' alt='optimisation' className='gridimg'/>
          </div>
          <div>
          <img src='modalcrud.png' alt='optimisation' className='gridimg'/>
          </div>
          <div>
          <img src='modaladd.png' alt='optimisation' className='gridimg'/>
          </div>
          <div>
          <img src='conec.png' alt='optimisation' className='gridimg'/>
          </div>
        </div>
      </div>
      <button className="close-button" onClick={onClose}><img src='fermerwhite.png' className='closer' alt='nina carducci'/></button>

    </div>
  );
};

export default ModalSophieBluel;