import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Modal from "./Modal"; // Importez le composant Modal
import Menu from "./Menu";

function Portfolio() {
  const [modalOpen, setModalOpen] = useState(null); // Utilisez une seule variable d'état pour gérer les modales
  const [menuOpen, setMenuOpen] = useState(false); // État pour gérer l'ouverture du menu

  const openModal = (modalName) => {
    setModalOpen(modalName);
  };

  const closeModal = () => {
    setModalOpen(null);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Inverser l'état du menu
  };

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in-top");
    elements.forEach((element, index) => {
      const delay = index * 200;
      setTimeout(() => {
        if (element) {
          element.classList.add("animate");
        }
      }, delay);
    });
  }, []);
  return (
    <div className="portfolio-container">
      <div className="top-port">
        <div className="topleft-port">
          <div className="welcomecv fade-in-top">
            <h1 className="desktitleport">
              Bienvenue sur mon <b>Portfolio</b> en ligne
            </h1>
            <h1 className="mobtitleport">
              Bienvenue sur mon <br />
              <b>Portfolio</b> en ligne
            </h1>
            <div>
              <span>Mis à jour le : 01/12/2023</span>
              <button className="hire">Contactez moi 👋</button>
            </div>
          </div>
          <div className="numberscolors">
            <div className="fade-in-top">
              <span>
                <b>25</b>
                <br />
                ans
              </span>
            </div>
            <div className="fade-in-top">
              <span>
                <b>+3</b>
                <br />
                ans d'expériences
              </span>
            </div>
            <div className="fade-in-top">
              <span>
                <b>+20</b>
                <br />
                projets
              </span>
            </div>
          </div>
        </div>
        <div className="topright-port">
          <div className="contain-navmenu fade-in-top">
            <div className="navblock">
              <span>
                Accès <b>rapide</b>
              </span>
              <button onClick={toggleMenu}>
                <img src="more.png" alt="navigation" />
              </button>
            </div>
          </div>
          <div className="flex-infos">
            <div className="pdpcontain fade-in-top">
              <img src="cesde.png" alt="profil" />
            </div>
            <div className="infoscontain fade-in-top">
              <div className="name">
                <span className="labelinfos">Nom :</span>
                <p className="repinfos">LOURDEL Sébastien</p>
              </div>
              <div className="moreinfos">
                <div>
                  <p className="labelinfos comple">Date de naissance :</p>
                  <p className="repinfos comple">08/08/1998</p>
                </div>
                <div>
                  <p className="labelinfos comple">Localisation :</p>
                  <div className="flex-response">
                    <img
                      className="flexresponse-img"
                      src="locali.png"
                      alt="illustrations"
                    />
                    &nbsp;&nbsp;<p className="repinfos comple loc">Arras</p>
                  </div>
                </div>
                <div>
                  <p className="labelinfos comple"></p>
                  <div className="flex-response">
                    <img
                      className="flexresponse-img"
                      src="gmail.png"
                      alt="illustrations"
                    />
                    &nbsp;&nbsp;
                    <Link to="mailto:seb.lourdel8@gmail.com">
                      <p className="repinfos comple">Seb.lourdel8@gmail.com</p>
                    </Link>
                  </div>
                </div>
                <div>
                  <p className="labelinfos comple"></p>
                  <div className="flex-response flexresp">
                    <img
                      className="flexresponse-img"
                      src="phonecall.png"
                      alt="illustrations"
                    />
                    &nbsp;&nbsp;
                    <Link to="tel:0630995015">
                      <p className="repinfos comple">06.30.99.50.15</p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="infos imgdef">
                <div class="image-container">
                  <div className="overlist"></div>
                  <div className="overlist overight"></div>
                  <div class="image-list">
                    <div>
                      <img src="git.png" alt="logo wordpress" />
                    </div>
                    <div>
                      <img src="js.png" alt="logo javascript" />
                    </div>
                    <div>
                      <img src="reactlogo.png" alt="logo tagmanager" />
                    </div>
                    <div>
                      <img src="seo.png" alt="logo seo" />
                    </div>
                    <div>
                      <img src="git.png" alt="logo git" />
                    </div>
                    <div>
                      <img src="wp.png" alt="logo wordpress" />
                    </div>
                    <div>
                      <img src="photoshop.png" alt="logo javascript" />
                    </div>
                    <div>
                      <img src="figma.png" alt="logo wordpress" />
                    </div>
                    <div>
                      <img src="tagmanager.webp" alt="logo javascript" />
                    </div>
                    <div>
                      <img src="reactlogo.png" alt="logo tagmanager" />
                    </div>
                    <div>
                      <img src="seo.png" alt="logo seo" />
                    </div>
                    <div>
                      <img src="git.png" alt="logo git" />
                    </div>
                    <div>
                      <img src="wp.png" alt="logo wordpress" />
                    </div>
                    <div>
                      <img src="js.png" alt="logo javascript" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bot-port">
        <div className="botleft-port">
          <div className="moreproject-container fade-in-top">
            <div className="flex-titlebox">
              <span>Projets Web</span>
              <Link to="/projects">
                <p>Voir Plus</p>
              </Link>
            </div>
            <div class="overimage-container">
              <div class="overimage">
                <img
                  src="grimoire-filter.webp"
                  alt="projet 3"
                  class="overimage__img"
                  loading="lazy"
                />
                <div class="overimage__overlay">
                  <h3
                    className="overimage__title"
                    onClick={() => openModal("modalMVG")}
                  >
                    Voir Plus
                  </h3>
                </div>
              </div>

              <div class="overimage">
                <img
                  src="nina-filter.webp"
                  alt="projet 3"
                  class="overimage__img"
                  loading="lazy"
                />
                <div class="overimage__overlay">
                  <h3
                    className="overimage__title"
                    onClick={() => openModal("modalNinaC")}
                  >
                    Voir Plus
                  </h3>
                </div>
              </div>

              <div class="overimage">
                <img
                  src="sophie-filter.webp"
                  alt="projet 3"
                  class="overimage__img"
                  loading="lazy"
                />
                <div class="overimage__overlay">
                  <h3
                    className="overimage__title"
                    onClick={() => openModal("modalSophieBluel")}
                  >
                    Voir Plus
                  </h3>
                </div>
              </div>

              <div class="overimage">
                <img
                  src="kasa-filter.webp"
                  alt="projet 3"
                  class="overimage__img"
                  loading="lazy"
                />
                <div class="overimage__overlay">
                  <h3
                    className="overimage__title"
                    onClick={() => openModal("modalKasa")}
                  >
                    Voir Plus
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="botright-port">
          <div className="moreinfos-container fade-in-top">
            <div className="flex-titlebox">
              <span>A propos</span>
              <Link to="/about">
                <p>Découvrir</p>
              </Link>
            </div>
            <p className="aboutdesc p-limit-lines">
              Développeur web front end React JS je suis passionné
              d'informatique, de design et de sport. J'ai commencé petit en
              découvrant la suite Adobe (Photoshop, AE, Illustrator..) et plus
              tard après une formation de développeur web je me suis lancé en
              auto-entreprise ce qui m'a permis de combiné mes compétences pour
              délivrer des maquettes, créations graphiques et site web. J'ai
              continuer à me former depuis 3 ans sur JS et React ainsi que le
              seo, le tracking, git.
            </p>
          </div>
        </div>
      </div>
      {modalOpen && (
        <Modal modalName={modalOpen} isOpen={true} onClose={closeModal} />
      )}
      {menuOpen && <Menu toggleMenu={toggleMenu} />}
    </div>
  );
}

export default Portfolio;
