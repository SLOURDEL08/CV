const modalsData = {
  modalKasa: {
    title: "Projet Kasa",
    imageIcon: process.env.PUBLIC_URL + "/images/eta.png",
    imageSrc: process.env.PUBLIC_URL + "/images/home-kasa.png",
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
      {
        image: process.env.PUBLIC_URL + "/images/react.webp",
        alt: "optimisation",
        text: "React JS",
      },
      {
        image: process.env.PUBLIC_URL + "/images/json.png",
        alt: "optimisation",
        text: "JSON",
      },
      {
        image: process.env.PUBLIC_URL + "/images/figma.png",
        alt: "optimisation",
        text: "Figma",
      },
      {
        image: process.env.PUBLIC_URL + "/images/sass.png",
        alt: "optimisation",
        text: "Sass",
      },
      // Ajoutez d'autres éléments au tableau selon vos besoins
    ],
  },
  modalNinaC: {
    title: "Nina Carducci",
    imageSrc: process.env.PUBLIC_URL + "/images/ninacardu.png",
    imageIcon: process.env.PUBLIC_URL + "/images/photo.png",
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
      {
        image: process.env.PUBLIC_URL + "/images/html-5.png",
        alt: "Nina Carducci Image 1",
        text: "Html / css",
      },
      {
        image: process.env.PUBLIC_URL + "/images/js.png",
        alt: "Nina Carducci Image 2",
        text: "Javascript",
      },
      { alt: "Nina Carducci Image 2", text: "SEO" },
      {
        image: process.env.PUBLIC_URL + "/images/light.png",
        alt: "Nina Carducci Image 2",
        text: "Lighthouse",
      },
      {
        image: process.env.PUBLIC_URL + "/images/wave.png",
        alt: "Nina Carducci Image 2",
        text: "Wave",
      },

      // Ajoutez d'autres éléments au tableau selon vos besoins
    ],
  },
  modalMVG: {
    title: "Mon Vieux Grimoire",
    imageSrc: process.env.PUBLIC_URL + "/images/homegrim.png",
    imageIcon: process.env.PUBLIC_URL + "/images/book.png",
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
      {
        image: process.env.PUBLIC_URL + "/images/node-js.png",
        alt: "optimisation",
        text: "Node JS",
      },
      {
        image: process.env.PUBLIC_URL + "/images/express.png",
        alt: "optimisation",
        text: "Express",
      },
      { alt: "optimisation", text: "JWT" },
      {
        image: process.env.PUBLIC_URL + "/images/mongo.png",
        alt: "optimisation",
        text: "MongoDB",
      },
      // Ajoutez d'autres éléments au tableau selon vos besoins
    ],
  },
  modalSophieBluel: {
    title: "Sophie Bluel",
    imageSrc: process.env.PUBLIC_URL + "/images/sophieb.png",
    imageIcon: process.env.PUBLIC_URL + "/images/home-kasa.png",
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
      {
        image: process.env.PUBLIC_URL + "/images/React.webp",
        alt: "SophieBluel Image 2",
        text: "React JS",
      },
      {
        image: process.env.PUBLIC_URL + "/images/Swagger-logo.png",
        alt: "SophieBluel Image 1",
        text: "Swagger",
      },
      {
        image: process.env.PUBLIC_URL + "/images/js.png",
        alt: "SophieBluel Image 1",
        text: "Javascript",
      },
    ],
  },

  modalBooki: {
    title: "Booki",
    imageSrc: process.env.PUBLIC_URL + "/images/booki.png",
    imageIcon: process.env.PUBLIC_URL + "/images/bookilock.png",
    imageAlt: "Projet Mon Vieux Grimoire",
    linkProject: "https://github.com/SLOURDEL08/BOOKI",
    description:
      "Développement front end de la page d'accueil de l'application Booki qui permet aux usagers de trouver des hébergements et des activités de leur choix. Respect des maquettes et des changements de mis en page selon les résolutions d'écran? ",
    actions: ["Développement Front End", "Respect des maquettes", "Responsive"],
    items: [
      {
        image: process.env.PUBLIC_URL + "/images/html-5.png",
        alt: "optimisation",
        text: "Html / css",
      },
      {
        image: process.env.PUBLIC_URL + "/images/figma.png",
        alt: "optimisation",
        text: "Figma",
      },
    ],
  },

  modalFerrari: {
    title: "Ferrari Beverly",
    imageSrc: process.env.PUBLIC_URL + "/images/ferrarihomepage.png",
    imageIcon: process.env.PUBLIC_URL + "/images/ferrari1.png",
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
      {
        image: process.env.PUBLIC_URL + "/images/React.webp",
        alt: "optimisation",
        text: "Html / css",
      },
      {
        image: process.env.PUBLIC_URL + "/images/js.png",
        alt: "optimisation",
        text: "Figma",
      },
      {
        image: process.env.PUBLIC_URL + "/images/html-5.png",
        alt: "optimisation",
        text: "Figma",
      },
    ],
  },

  modalToast: {
    title: "Toast Collectif",
    imageSrc: process.env.PUBLIC_URL + "/images/toast.png",
    imageIcon: process.env.PUBLIC_URL + "/images/toastlogo.png",
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
      {
        image: process.env.PUBLIC_URL + "/images/wp.png",
        alt: "optimisation",
        text: "Html / css",
      },
      {
        image: process.env.PUBLIC_URL + "/images/js.png",
        alt: "optimisation",
        text: "Figma",
      },
      {
        image: process.env.PUBLIC_URL + "/images/html-5.png",
        alt: "optimisation",
        text: "Figma",
      },
    ],
  },

  modalTesla: {
    title: "Tesla HomePage",
    imageSrc: process.env.PUBLIC_URL + "/images/tesla.png",
    imageIcon: process.env.PUBLIC_URL + "/images/teslalogo.png",
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
      {
        image: process.env.PUBLIC_URL + "/images/React.webp",
        alt: "optimisation",
        text: "Html / css",
      },
      {
        image: process.env.PUBLIC_URL + "/images/js.png",
        alt: "optimisation",
        text: "Figma",
      },
      {
        image: process.env.PUBLIC_URL + "/images/html-5.png",
        alt: "optimisation",
        text: "Figma",
      },
    ],
  },

  modalDigit: {
    title: "Digitalizerr",
    imageSrc: process.env.PUBLIC_URL + "/images/digitalizerrhome.png",
    imageIcon: process.env.PUBLIC_URL + "/images/digitalizerricon.png",
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
      {
        image: process.env.PUBLIC_URL + "/images/React.webp",
        alt: "optimisation",
        text: "Html / css",
      },
      {
        image: process.env.PUBLIC_URL + "/images/js.png",
        alt: "optimisation",
        text: "Figma",
      },
      {
        image: process.env.PUBLIC_URL + "/images/figma.png",
        alt: "optimisation",
        text: "Figma",
      },
      {
        image: process.env.PUBLIC_URL + "/images/html-5.png",
        alt: "optimisation",
        text: "Figma",
      },
    ],
  },

  modalCouvreT: {
    title: "Couvretanche",
    imageSrc: process.env.PUBLIC_URL + "/images/couvretanche-homepage.png",
    imageIcon: process.env.PUBLIC_URL + "/images/digitalizerricon.png",
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
      {
        image: process.env.PUBLIC_URL + "/images/wp.png",
        alt: "optimisation",
        text: "Html / css",
      },
      {
        image: process.env.PUBLIC_URL + "/images/html-5.png",
        alt: "optimisation",
        text: "Figma",
      },
      {
        image: process.env.PUBLIC_URL + "/images/seo.png",
        alt: "optimisation",
        text: "Figma",
      },
    ],
  },

  modalABC: {
    title: "Alliance Batiment Construction",
    imageSrc: process.env.PUBLIC_URL + "/images/abchomepage.png",
    imageIcon: process.env.PUBLIC_URL + "/images/logoabc.png",
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
      {
        image: process.env.PUBLIC_URL + "/images/wp.png",
        alt: "optimisation",
        text: "Html / css",
      },
      {
        image: process.env.PUBLIC_URL + "/images/html-5.png",
        alt: "optimisation",
        text: "Figma",
      },
      {
        image: process.env.PUBLIC_URL + "/images/seo.png",
        alt: "optimisation",
        text: "Figma",
      },
    ],
  },

  modalUber: {
    title: "Uber Eats",
    imageSrc: process.env.PUBLIC_URL + "/images/uber-homepage.png",
    imageIcon: process.env.PUBLIC_URL + "/images/digitalizerricon.png",
    imageAlt: "Projet Uber",
    linkProject: "https://github.com/SLOURDEL08/UberEats",
    description:
      "Projet réplique ancienne page uber eats, dynamique en Vue Js avec un systeme de filtres fonctionnel directement dans la search bar. Création de page dynamique selon le restaurant avec menu approprié.",
    actions: ["Vue JS", "Filter", "BDD", "Components", "Search Bar"],
    items: [
      {
        image: process.env.PUBLIC_URL + "/images/vue.png",
        alt: "optimisation",
        text: "Vue JS",
      },
      {
        image: process.env.PUBLIC_URL + "/images/js.png",
        alt: "optimisation",
        text: "Javascript",
      },
    ],
  },

  modalDigitoile: {
    title: "LaDigitoile",
    imageSrc: process.env.PUBLIC_URL + "/images/digitoilecomplet.png",
    imageIcon: process.env.PUBLIC_URL + "/images/digitalizerricon.png",
    imageAlt: "Projet WebAgency LaDigitoile",
    linkProject: "https://ladigitoile.fr",
    description:
      "Projet Développement web / Wordpress , design sur-mesure responsive et fonctionnalité JS/JQUERY, intégration d'une maquette UX/UI.",
    actions: [
      "HTML",
      "CSS",
      "JS",
      "JQUERY",
      "Wordpress",
      "DROPDOWN",
      "CAROUSEL",
    ],
    items: [
      {
        image: process.env.PUBLIC_URL + "/images/wp.png",
        alt: "optimisation",
        text: "WORDPRESS",
      },
      {
        image: process.env.PUBLIC_URL + "/images/html-5.png",
        alt: "optimisation",
        text: "HTML",
      },
      {
        image: process.env.PUBLIC_URL + "/images/figma.png",
        alt: "optimisation",
        text: "Figma",
      },

      {
        image: process.env.PUBLIC_URL + "/images/js.png",
        alt: "optimisation",
        text: "Javascript",
      },
    ],
  },
  modalSavine: {
    title: "Paul Savine",
    imageSrc: process.env.PUBLIC_URL + "/images/savinecomplet.png",
    imageIcon: process.env.PUBLIC_URL + "/images/savineicon.png",
    imageAlt: "Projet Paul Savine",
    linkProject: "https://paulsavine.fr",
    description:
      "Site vitrine pour un duo d'architecte et de concepteur de mobilier pharmaceutique, mise en avant de l'activité via du contenu image/texte et un design sur-mesure épuré.",
    actions: [
      "Wordpress",
      "HTML",
      "CSS",
      "ELEMENTOR",
      "FORMINATOR",
      "CAROUSEL",
    ],
    items: [
      {
        image: process.env.PUBLIC_URL + "/images/wp.png",
        alt: "optimisation",
        text: "Wordpress",
      },
      {
        image: process.env.PUBLIC_URL + "/images/html-5.png",
        alt: "optimisation",
        text: "HTML",
      },
      {
        image: process.env.PUBLIC_URL + "/images/seo.png",
        alt: "optimisation",
        text: "SEO",
      },
    ],
  },
  modalSirius: {
    title: "Sirius Sécurité",
    imageSrc: process.env.PUBLIC_URL + "/images/siriuscomplet.png",
    imageIcon: process.env.PUBLIC_URL + "/images/siriusicon.png",
    imageAlt: "Projet Sirius Sécurité",
    linkProject: "https://siriussecurite.fr",
    description:
      "Site vitrine avec design sur mesure pour une société de sécurité privée, besoin d'un contenu clair, simple, call to action et formulaire de contact présent fréquemment.",
    actions: ["Wordpress", "HTML", "CSS", "ELEMENTOR", "CAROUSEL"],
    items: [
      {
        image: process.env.PUBLIC_URL + "/images/wp.png",
        alt: "optimisation",
        text: "Wordpress",
      },
      {
        image: process.env.PUBLIC_URL + "/images/html-5.png",
        alt: "optimisation",
        text: "HTML",
      },
      {
        image: process.env.PUBLIC_URL + "/images/seo.png",
        alt: "optimisation",
        text: "SEO",
      },
    ],
  },
};

export default modalsData;
