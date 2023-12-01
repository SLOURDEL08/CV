// Modal.js

import React from "react";
import "./App.css";
import ScrollAuto from "./Scrollauto";

// Définissez les données de toutes les modales
const modalsData = {
  modalKasa: {
    title: "Projet Kasa",
    imageIcon: "eta.png",
    imageSrc: "home-kasa.png",
    imageAlt: "Projet Kasa",
    linkProject: "https://github.com/SLOURDEL08/KASA",
    description:
      "Ce projet implique la création du frontend de l'application en suivant les maquettes Figma, utiliser la logique de composant pour réutiliser plusieurs fois certaines fonctionnalités. Le backend n'étant pas développé un fichier JSON nous permet de géneré plusieurs logements en location et donc gérer l'intégration avec les futurs données.",
    actions: [
      "Développez le Front END",
      "Gérer React router",
      "Utilisez les components",
      "Utilisez SASS",
      "Intégrer le backend",
      "Création Slider & Collapse",
      "Responsive",
    ],
    items: [
      { image: "react.webp", alt: "optimisation", text: "React JS" },
      { image: "json.png", alt: "optimisation", text: "JSON" },
      { image: "figma.png", alt: "optimisation", text: "Figma" },
      { image: "sass.png", alt: "optimisation", text: "Sass" },
      // Ajoutez d'autres éléments au tableau selon vos besoins
    ],
  },
  modalNinaC: {
    title: "Nina Carducci",
    imageSrc: "ninacardu.png",
    imageIcon: "photo.png",
    imageAlt: "icone Nina Carducci",
    linkProject: "https://github.com/SLOURDEL08/NinaCarducci",
    description:
      "Mon intervention a consisté en une optimisation globale du site, englobant des améliorations des performances, du référencement, de l'accessibilité, et de la résolution de problèmes techniques. J'ai également intégré des éléments pour améliorer le référencement local, ainsi que des métadonnées pour optimiser le partage sur les réseaux sociaux.",
    actions: [
      "Optimisation globale du site et de la structure",
      "Mise en place du référencement local Schema.org",
      "Ajout des métadonnées pour les réseaux sociaux",
      "Modifications liées à l'accessibilité du site",
      "Optimisation des images",
      "Minification JS & CSS",
      "Correction bug filtre et galerie JS",
      "Rapport perfomances Avant / Après",
    ],
    items: [
      { image: "html-5.png", alt: "Nina Carducci Image 1", text: "Html / css" },
      { image: "js.png", alt: "Nina Carducci Image 2", text: "Javascript" },
      { alt: "Nina Carducci Image 2", text: "SEO" },
      { image: "light.png", alt: "Nina Carducci Image 2", text: "Lighthouse" },
      { image: "wave.png", alt: "Nina Carducci Image 2", text: "Wave" },

      // Ajoutez d'autres éléments au tableau selon vos besoins
    ],
  },
  modalMVG: {
    title: "Mon Vieux Grimoire",
    imageSrc: "homegrim.png",
    imageIcon: "book.png",
    imageAlt: "Projet Mon Vieux Grimoire",
    linkProject: "https://github.com/SLOURDEL08/MonVieuxGrimoire",
    description:
      "La mission implique le développement du back-end d'un site web de notation de livres. Le projet comprend la création d'une API pour permettre aux utilisateurs d'ajouter des livres et de donner des notations, visibles par le public. Il est également nécessaire d'optimiser les images téléchargées par les utilisateurs, conformément aux principes du Green Code.",
    actions: [
      "Création du backend",
      "Création API",
      "Authentification",
      "CRUD",
      "Notation de livre",
      "Optimisation Image",
    ],
    items: [
      { image: "node-js.png", alt: "optimisation", text: "Node JS" },
      { image: "express.png", alt: "optimisation", text: "Express" },
      { alt: "optimisation", text: "JWT" },
      { image: "mongo.png", alt: "optimisation", text: "MongoDB" },
      // Ajoutez d'autres éléments au tableau selon vos besoins
    ],
  },
  modalSophieBluel: {
    title: "Sophie Bluel",
    imageSrc: "sophieb.png",
    imageIcon: "home-kasa.png",
    imageAlt: "Projet Kasa",
    linkProject: "https://github.com/SLOURDEL08/SophieBluel",
    description:
      "Ma mission consistait à développer la page de présentation des travaux de l'architecte en utilisant le HTML fourni comme point de départ. Ensuite, ma seconde tâche était de créer la page de connexion de l'administrateur du site à partir de zéro. Enfin, concevoir une modale permettant d'uploader de nouveaux médias.",
    actions: [
      "Page de présentation",
      "Page de connexion admin",
      "CRUD",
      "Filtre JS",
      "Modal add/delete",
      "Formulaire Ajout CRUD",
    ],
    items: [
      { image: "React.webp", alt: "SophieBluel Image 2", text: "React JS" },
      {
        image: "Swagger-logo.png",
        alt: "SophieBluel Image 1",
        text: "Swagger",
      },
      { image: "js.png", alt: "SophieBluel Image 1", text: "Javascript" },
    ],
  },

  modalBooki: {
    title: "Booki",
    imageSrc: "booki.png",
    imageIcon: "bookilock.png",
    imageAlt: "Projet Mon Vieux Grimoire",
    linkProject: "https://github.com/SLOURDEL08/BOOKI",
    description:
      "Développement front end de la page d'accueil de l'application Booki qui permet aux usagers de trouver des hébergements et des activités de leur choix. Respect des maquettes et des changements de mis en page selon les résolutions d'écran? ",
    actions: ["Développement Front End", "Respect des maquettes", "Responsive"],
    items: [
      { image: "html-5.png", alt: "optimisation", text: "Html / css" },
      { image: "figma.png", alt: "optimisation", text: "Figma" },
    ],
  },

  modalFerrari: {
    title: "Ferrari Beverly",
    imageSrc: "ferrarihomepage.png",
    imageIcon: "ferrari1.png",
    imageAlt: "Projet Mon Vieux Grimoire",
    linkProject: "https://github.com/SLOURDEL08/FerrariBeverly",
    description:
      "Le défi était de pouvoir récréer la homepage du site ferraribeverlyhills.com, je voulais me tester lors de ma formation j'ai donc réalisé cette page d'accueil avec les fonctionnalités et le responsive. ",
    actions: [
      "Développement Front End",
      "Respect des maquettes",
      "Responsive",
      "Slider",
      "SplitScreenSlide",
      "Carousel",
    ],
    items: [
      { image: "React.webp", alt: "optimisation", text: "Html / css" },
      { image: "js.png", alt: "optimisation", text: "Figma" },
      { image: "html-5.png", alt: "optimisation", text: "Figma" },
    ],
  },

  modalToast: {
    title: "Toast Collectif",
    imageSrc: "toast.png",
    imageIcon: "toastlogo.png",
    imageAlt: "Projet ToastCollectif",
    linkProject: "",
    description:
      "Développement sur-mesure d'un site web vitrine pour une agence de marketing sur Wordpress. Il s'agit d'une homepage complète avec présenation des chiffres, offres, l'équipe et le footer avec la newsletter. Création de fonctionnalités de défilement, lightbox sur-mesure et autres.",
    actions: [
      "Mise en page",
      "Design agency",
      "Lightbox perso",
      "Responsive",
      "Arborescence",
    ],
    items: [
      { image: "wp.png", alt: "optimisation", text: "Html / css" },
      { image: "js.png", alt: "optimisation", text: "Figma" },
      { image: "html-5.png", alt: "optimisation", text: "Figma" },
    ],
  },

  modalTesla: {
    title: "Tesla HomePage",
    imageSrc: "tesla.png",
    imageIcon: "teslalogo.png",
    imageAlt: "Projet Tesla HomePage",
    linkProject: "",
    description:
      "Développement de la page d'accueil du site tesla.com qui reprend une mise en page spécial avec plusieurs section qui défilent progessivement les unes après les autres au scroll.",
    actions: [
      "Développement Front End",
      "Scroll section",
      "Responsive",
      "Modal menu",
      "Sous menu",
    ],
    items: [
      { image: "React.webp", alt: "optimisation", text: "Html / css" },
      { image: "js.png", alt: "optimisation", text: "Figma" },
      { image: "html-5.png", alt: "optimisation", text: "Figma" },
    ],
  },

  modalDigit: {
    title: "Digitalizerr",
    imageSrc: "digitalizerrhome.png",
    imageIcon: "digitalizerricon.png",
    imageAlt: "Projet Mon Vieux Grimoire",
    description:
      "J'ai tenté de développer une maquette de site web de A à Z pour une agence marketing web. J'ai réalisé la maquette sur figma et j'ai développé la maquette sur reactjs pour pouvoir réutiliser des composants.",
    actions: [
      "Respect de la maquette",
      "Intégration des fonctionnalités",
      "Background layer",
      "Responsive",
    ],
    items: [
      { image: "React.webp", alt: "optimisation", text: "Html / css" },
      { image: "js.png", alt: "optimisation", text: "Figma" },
      { image: "figma.png", alt: "optimisation", text: "Figma" },
      { image: "html-5.png", alt: "optimisation", text: "Figma" },
    ],
  },

  modalCouvreT: {
    title: "Couvretanche",
    imageSrc: "couvretanche-homepage.png",
    imageIcon: "digitalizerricon.png",
    imageAlt: "Projet Mon Vieux Grimoire",
    description:
      "Création d'un site vitrine Wordpress pour une entreprise de couvreur/zingueur. Mise en place du SEO, création compte googlemybusiness et email professionnel. Installation du Wordpress sur OVH.",
    actions: [
      "Respect de la structure",
      "SEO",
      "Responsive",
      "Mega menu",
      "Formulaire de contact personnalisé",
    ],
    items: [
      { image: "wp.png", alt: "optimisation", text: "Html / css" },
      { image: "html-5.png", alt: "optimisation", text: "Figma" },
      { image: "seo.png", alt: "optimisation", text: "Figma" },
    ],
  },

  modalABC: {
    title: "Alliance Batiment Construction",
    imageSrc: "abchomepage.png",
    imageIcon: "logoabc.png",
    imageAlt: "Projet ABC Renov",
    description:
      "Site vitrine Wordpress pour une entreprise de BTP à Nice qui souhaite un site dynamique et mise en page reprenant le site abc26.fr . SEO, Googlemybusiness, extension devis en ligne. ",
    actions: [
      "Respect mise en page",
      "SEO",
      "Responsive",
      "Devis en ligne",
      "Carousel zoom",
    ],
    items: [
      { image: "wp.png", alt: "optimisation", text: "Html / css" },
      { image: "html-5.png", alt: "optimisation", text: "Figma" },
      { image: "seo.png", alt: "optimisation", text: "Figma" },
    ],
  },

  modalUber: {
    title: "Uber Eats",
    imageSrc: "digitalizerricon.png",
    imageIcon: "logoabc.png",
    imageAlt: "Projet Uber",
    linkProject: "https://github.com/SLOURDEL08/UberEats",
    description:
      "Projet réplique ancienne page uber eats, dynamique en Vue Js avec un systeme de filtres fonctionnel. Création de page dynamique selon le restaurant avec menu approprié.",
    actions: ["Vue JS", "Filter", "BDD", "Components"],
    items: [
      { image: "vue.png", alt: "optimisation", text: "Vue JS" },
      { image: "js.png", alt: "optimisation", text: "Javascript" },
    ],
  },
};

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
