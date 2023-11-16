import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import About from './About';
import Portfolio from './Portfolio';
import Projects from './Projects';
import Menu from './Menu';
import './mediaqueries.css';

function preloadImages(modals) {
  modals.forEach((modal) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = modal.imageSrc;
    document.head.appendChild(link);
  });
}

function App() {
  const modalsData = {
    modalKasa: {
      title: 'Projet Kasa',
      imageIcon: 'eta.png',
      imageSrc: 'home-kasa.png',
      imageAlt: 'Projet Kasa',
      linkProject: 'https://github.com/SLOURDEL08/KASA',
      description: "Ce projet implique la création du frontend de l'application en suivant les maquettes Figma, utiliser la logique de composant pour réutiliser plusieurs fois certaines fonctionnalités. Le backend n'étant pas développé un fichier JSON nous permet de géneré plusieurs logements en location et donc gérer l'intégration avec les futurs données.",
      actions: ['Développez le Front END', 'Gérer React router', 'Utilisez les components', 'Utilisez SASS', 'Intégrer le backend', 'Création Slider & Collapse', 'Responsive'],
      items: [
        { image: 'react.webp', alt: 'optimisation', text: 'React JS' },
        { image: 'json.png', alt: 'optimisation', text: 'JSON' },
        { image: 'figma.png', alt: 'optimisation', text: 'Figma' },
        { image: 'sass.png', alt: 'optimisation', text: 'Sass' },
        // Ajoutez d'autres éléments au tableau selon vos besoins
      ],
    },
    modalNinaC: {
      title: 'Nina Carducci',
      imageSrc: 'ninacardu.png',
      imageIcon: 'photo.png',
      imageAlt: 'icone Nina Carducci',
      linkProject: 'https://github.com/SLOURDEL08/NinaCarducci',
      description: "Mon intervention a consisté en une optimisation globale du site, englobant des améliorations des performances, du référencement, de l'accessibilité, et de la résolution de problèmes techniques. J'ai également intégré des éléments pour améliorer le référencement local, ainsi que des métadonnées pour optimiser le partage sur les réseaux sociaux.",
      actions: ['Optimisation globale du site et de la structure', 'Mise en place du référencement local Schema.org' , 'Ajout des métadonnées pour les réseaux sociaux' , "Modifications liées à l'accessibilité du site", 'Optimisation des images', 'Minification JS & CSS', 'Correction bug filtre et galerie JS', 'Rapport perfomances Avant / Après'],
      items: [
        { image: 'html-5.png', alt: 'Nina Carducci Image 1', text: 'Html / css' },
        { image: 'js.png', alt: 'Nina Carducci Image 2', text: 'Javascript' },
        { alt: 'Nina Carducci Image 2', text: 'SEO' },
        { image: 'light.png', alt: 'Nina Carducci Image 2', text: 'Lighthouse' },
        { image: 'wave.png', alt: 'Nina Carducci Image 2', text: 'Wave' },
  
        // Ajoutez d'autres éléments au tableau selon vos besoins
      ],
    },
    modalMVG: {
      title: 'Mon Vieux Grimoire',
      imageSrc: 'homegrim.png',
      imageIcon: 'book.png',
      imageAlt: 'Projet Mon Vieux Grimoire',
      linkProject: 'https://github.com/SLOURDEL08/MonVieuxGrimoire',
      description: "La mission implique le développement du back-end d'un site web de notation de livres. Le projet comprend la création d'une API pour permettre aux utilisateurs d'ajouter des livres et de donner des notations, visibles par le public. Il est également nécessaire d'optimiser les images téléchargées par les utilisateurs, conformément aux principes du Green Code.",
      actions: ['Création du backend', 'Création API', 'Authentification', 'CRUD', 'Notation de livre', 'Optimisation Image'],
      items: [
        { image: 'node-js.png', alt: 'optimisation', text: 'Node JS' },
        { image: 'express.png', alt: 'optimisation', text: 'Express' },
        { alt: 'optimisation', text: 'JWT' },
        { image: 'mongo.png', alt: 'optimisation', text: 'MongoDB' },
        // Ajoutez d'autres éléments au tableau selon vos besoins
      ],
    },
    modalSophieBluel: {
      title: 'Sophie Bluel',
      imageSrc: 'sophieb.png',
      imageIcon: 'home-kasa.png',
      imageAlt: 'Projet Kasa',
      linkProject: 'https://github.com/SLOURDEL08/SophieBluel',
      description: "Ma mission consistait à développer la page de présentation des travaux de l'architecte en utilisant le HTML fourni comme point de départ. Ensuite, ma seconde tâche était de créer la page de connexion de l'administrateur du site à partir de zéro. Enfin, concevoir une modale permettant d'uploader de nouveaux médias.",
      actions: ['Page de présentation', 'Page de connexion admin', 'CRUD', 'Filtre JS', 'Modal add/delete', 'Formulaire Ajout CRUD'  ],
      items: [
        { image: 'React.webp', alt: 'SophieBluel Image 2', text: 'React JS' },
        { image: 'Swagger-logo.png', alt: 'SophieBluel Image 1', text: 'Swagger' },
        { image: 'js.png', alt: 'SophieBluel Image 1', text: 'Javascript' },
      ],
    },
    
    modalBooki: {
      title: 'Booki',
      imageSrc: 'booki.png',
      imageIcon: 'bookilock.png',
      imageAlt: 'Projet Mon Vieux Grimoire',
      linkProject: 'https://github.com/SLOURDEL08/BOOKI',
      description: "Développement front end de la page d'accueil de l'application Booki qui permet aux usagers de trouver des hébergements et des activités de leur choix. Respect des maquettes et des changements de mis en page selon les résolutions d'écran? ",
      actions: ['Développement Front End', 'Respect des maquettes', 'Responsive',],
      items: [
        { image: 'html-5.png', alt: 'optimisation', text: 'Html / css' },
        { image: 'figma.png', alt: 'optimisation', text: 'Figma' },
      ],
    },
  
    modalFerrari: {
      title: 'Ferrari Beverly',
      imageSrc: 'ferrarihomepage.png',
      imageIcon: 'ferrari1.png',
      imageAlt: 'Projet Mon Vieux Grimoire',
      linkProject: 'https://github.com/SLOURDEL08/FerrariBeverly',
      description: "Le défi était de pouvoir récréer la homepage du site ferraribeverlyhills.com, je voulais me tester lors de ma formation j'ai donc réalisé cette page d'accueil avec les fonctionnalités et le responsive. ",
      actions: ['Développement Front End', 'Respect des maquettes', 'Responsive','Slider','SplitScreenSlide', 'Carousel'],
      items: [
        { image: 'React.webp', alt: 'optimisation', text: 'Html / css' },
        { image: 'js.png', alt: 'optimisation', text: 'Figma' },
        { image: 'html-5.png', alt: 'optimisation', text: 'Figma' },
      ],
    },
  
    modalToast: {
      title: 'Toast Collectif',
      imageSrc: 'toast.png',
      imageIcon: 'ferrari1.png',
      imageAlt: 'Projet Mon Vieux Grimoire',
      linkProject: 'https://github.com/SLOURDEL08/FerrariBeverly',
      description: "Développement sur-mesure d'un site web vitrine pour une agence de marketing sur Wordpress. Il s'agit d'une homepage complète avec présenation des chiffres, offres, l'équipe et le footer avec la newsletter. Création de fonctionnalités de défilement, lightbox sur-mesure et autres.",
      actions: ['Mise en page', 'Design agency', 'Lightbox perso','Responsive','Arborescence'],
      items: [
        { image: 'wp.png', alt: 'optimisation', text: 'Html / css' },
        { image: 'js.png', alt: 'optimisation', text: 'Figma' },
        { image: 'html-5.png', alt: 'optimisation', text: 'Figma' },
      ],
    },
  
    modalTesla: {
      title: 'Ferrari Beverly',
      imageSrc: 'ferrarihomepage.png',
      imageIcon: 'ferrari1.png',
      imageAlt: 'Projet Mon Vieux Grimoire',
      linkProject: 'https://github.com/SLOURDEL08/FerrariBeverly',
      description: "Développement de la page d'accueil du site tesla.com qui reprend une mise en page spécial avec plusieurs section qui défilent progessivement les unes après les autres au scroll.",
      actions: ['Développement Front End', 'Scroll section', 'Responsive','Modal menu','Sous menu'],
      items: [
        { image: 'React.webp', alt: 'optimisation', text: 'Html / css' },
        { image: 'js.png', alt: 'optimisation', text: 'Figma' },
        { image: 'html-5.png', alt: 'optimisation', text: 'Figma' },
      ],
    },
  
    modalDigit: {
      title: 'Digitalizerr',
      imageSrc: 'digitalizerrhome.png',
      imageIcon: 'digitalizerricon.png',
      imageAlt: 'Projet Mon Vieux Grimoire',
      description: "J'ai tenté de développer une maquette de site web de A à Z pour une agence marketing web. J'ai réalisé la maquette sur figma et j'ai développé la maquette sur reactjs pour pouvoir réutiliser des composants.",
      actions: ['Respect de la maquette', 'Intégration des fonctionnalités', 'Background layer','Responsive'],
      items: [
        { image: 'React.webp', alt: 'optimisation', text: 'Html / css' },
        { image: 'js.png', alt: 'optimisation', text: 'Figma' },
        { image: 'figma.png', alt: 'optimisation', text: 'Figma' },
        { image: 'html-5.png', alt: 'optimisation', text: 'Figma' },
      ],
    },
  };

  const modalsArray = Object.values(modalsData);

  useEffect(() => {
    preloadImages(modalsArray);
  }, []); // le tableau vide en second argument assure que cela se produit une seule fois au montage

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/" element={<Navigate to="/portfolio" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
