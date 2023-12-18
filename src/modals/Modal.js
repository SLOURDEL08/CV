// Modal.js

import React from "react";
import "../App.css";
import ScrollAuto from "../Scrollauto";
import modalsData from "./modalsData"; // Importez les données modales depuis le nouveau fichier

// Définissez les données de toutes les modales

const Modal = ({ modalName, isOpen, onClose }) => {
  if (!isOpen) return null;

  const modalData = modalsData[modalName];

  if (!modalData) {
    // Gérez le cas où le nom de la modal n'est pas valide
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content fade-in-bottom">
        <div className="cont-mod">
          <span className="titlemodal">Projet :</span>
          <span className="titlemodalresp">{modalData.title}</span>
          <img
            src={modalData.imageIcon}
            alt={modalData.imageAlt}
            className="imgtitlemodal"
          />
        </div>
        <ScrollAuto items={modalData.items} />
        <div className="desc-project">
          <div>
            <p className="descontext">{modalData.description}</p>
          </div>
          <div>
            <span className="actionspan">
              <img
                src="gear.png"
                alt="optimisation"
                className="titleactionimg"
              />
              Actions à mener:
            </span>
            <ul className="listactions">
              {modalData.actions.map((action, index) => (
                <li key={index}>
                  <img
                    src="nounarrow.png"
                    alt="optimisation"
                    className="actionimg"
                  />
                  {action}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="imgillucontain">
          <img
            src={modalData.imageSrc}
            alt={modalData.imageAlt}
            className="illuprojetweb"
            loading="lazy"
          />
        </div>
        <div className="linkprojects-cont">
          <a href={modalData.linkProject}>
            <div>
              <img src="github.png" alt="github icon" /> Lien vers le projet
            </div>
          </a>
        </div>
        <button className="close-button" onClick={onClose}>
          <img src="fermerwhite.png" className="closer" alt="nina carducci" />
        </button>
      </div>
    </div>
  );
};

export default Modal;
