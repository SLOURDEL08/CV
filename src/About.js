import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Menu from "./Menu";

function About() {
  const [menuOpen, setMenuOpen] = useState(false); // État pour gérer l'ouverture du menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Inverser l'état du menu
  };

  function downloadPDF() {
    // Créer un élément <a> pour le téléchargement
    const link = document.createElement("a");
    link.href = "cv_lourdelsebastien2023.pdf"; // Mettez le chemin vers votre fichier PDF ici
    link.download = "cv_lourdelsebastien2023.pdf"; // Spécifiez le nom du fichier téléchargé
    link.click();
  }

  return (
    <div className="container-about">
      <div className="left-about">
        <div className="secdrow-about">
          <img src="cesde.png" className="profilpic-about" alt="profil pic" />
          <div className="infos-about">
            <p className="title-about">LOURDEL Sébastien</p>
            <div>
              <p className="lbl-about">Date de naissance :</p>
              <p className="replbl-about">08/08/1998</p>
            </div>
            <div>
              <p className="lbl-about">Localisation :</p>
              <div className="replbl-about">
                <img
                  className="flexresponse-img"
                  src="locali.png"
                  alt="illustrations"
                />
                &nbsp;&nbsp;<p className="replbl-about">Arras</p>
              </div>
            </div>
            <div>
              <p className="lbl-about">E-Mail :</p>
              <div className="replbl-about">
                <img
                  className="flexresponse-img"
                  src="gmail.png"
                  alt="illustrations"
                />
                &nbsp;&nbsp;
                <p className="replbl-about">Seb.lourdel8@gmail.com</p>
              </div>
            </div>
            <div>
              <p className="lbl-about">Téléphone :</p>
              <div className="replbl-about">
                <img
                  className="flexresponse-img"
                  src="phonecall.png"
                  alt="illustrations"
                />
                &nbsp;&nbsp;<p className="replbl-about">06.30.99.50.15</p>
              </div>
            </div>
          </div>
        </div>
        <div className="secdrow-about scdabt">
          <p className="title-about scdabt">
            <b>Développeur web</b> Front-End React JS
          </p>
          <span>
            Développeur web front end React JS je suis passionné d'informatique,
            de design et de sport. J'ai commencé petit en découvrant la suite
            Adobe (Photoshop, AE, Illustrator..) et plus tard après une
            formation de développeur web je me suis lancé en auto-entreprise ce
            qui m'a permis de combiner mes compétences pour délivrer des
            maquettes, créations graphiques et site web. J'ai continué à me
            former depuis 3 ans sur JS et React ainsi que le seo, le tracking,
            git.
          </span>
          <div className="flexbtn-secabout">
            <button onClick={downloadPDF}>
              Télécharger mon CV PDF &nbsp;&nbsp;👈
            </button>
            <Link to="/projects">
              <button>Mes projets</button>
            </Link>
          </div>
        </div>
        <div className="thirdrow-about">
          <p>Compétences :</p>
          <div class="image-container abt">
            <div class="image-list">
              <div>
                <img src="html.png" alt="logo wordpress" />
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
                <img src="sasss.png" alt="logo tagmanager" />
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
      <div className="right-about">
        <div className="fastmenu">
          <span>
            Accès <b>rapide</b>
          </span>
          <button onClick={toggleMenu}>
            <img src="more.png" alt="navigation" />
          </button>
        </div>
        <div className="contain-cvinfos">
          <div className="containtitle-rightabout">
            <img src="chapeau.png" />
            <p className="title-exp">Formations</p>
          </div>
          <div className="contain-form">
            <div className="exp-item">
              <p>Baccalauréat STMG</p>
              <p>Lycée Arhur Rimbaud - Sin le noble</p>
              <p>2016</p>
            </div>
            <div className="exp-item">
              <p>Formation Développeur web</p>
              <p>POP School Valenciennes</p>
              <p>Fev 2019 - Juillet 2019</p>
            </div>
            <div className="exp-item">
              <p>Stage fin de formation</p>
              <p>DK Group Flers-en-escrebieux</p>
              <p>Sept 2019 - Dec 2019</p>
            </div>
            <div className="exp-item">
              <p>Formation Développeur web</p>
              <p>OpenClassRoom</p>
              <p>Nov 2022 - Nov 2023</p>
            </div>
          </div>
          <div className="containtitle-rightabout">
            <img src="work.png" />
            <p className="title-exp">Expériences</p>
          </div>
          <div className="contain-exp">
            <div className="exp-item">
              <p>Auto Entrepreneur</p>
              <p>Création site Wordpress personnalisé</p>
              <p>Fevrier 2020</p>
            </div>
            <div className="exp-item">
              <p>Agent de production</p>
              <p>Graphic Packaging</p>
              <p>Jui 2020 - Sept 2020</p>
            </div>
            <div className="exp-item">
              <p>Livreur Messagerie</p>
              <p>FL Express</p>
              <p>Dec 2020 - Dec 2021</p>
            </div>
            <div className="exp-item">
              <p>Alternance Développeur</p>
              <p>Toast Collectif</p>
              <p>Nov 2022 - Nov 2023</p>
            </div>
            <div className="exp-item">
              <p>Auto Entrepreneur</p>
              <p>Création site Wordpress personnalisé</p>
              <p>Fevrier 2018</p>
            </div>
          </div>
        </div>
      </div>
      {menuOpen && <Menu toggleMenu={toggleMenu} />}
    </div>
  );
}

export default About;
