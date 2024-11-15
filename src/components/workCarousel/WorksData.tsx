import Work from '../sections/works/work/Work';

const worksData = [
  {
    title: 'Kill Bique',
    date: '2022',
    description:
      "Numérisation du jeu de carte Kill Bique. Implémentation d'IA. Conception, implémentation et déploiement d'une solution multijoueur (client/serveur) respectant le modèle MVC. ",
    person_count: '8',
    state: 'terminé',
    technolist: ['java', 'javaFx'],
    gradientColors: ['rgb(21 38 43)', '#000000'],
    bgGradient: 'linear-gradient(172deg, rgb(243 185 185), rgb(38 33 24))',
    bgImgName: 'kill bique_transp.png',
    displayImageInRow: false,
    bubbles: [],
  },
  {
    title: 'Portfolio',
    date: '2023',
    description:
      "Conception, développement et déploiement d'un portfolio web. Le site est hébergé sur GitHub Pages.",
    person_count: '1',
    state: 'en cours',
    technolist: ['react', 'css'],
    displayImageInRow: false,
    gradientColors: ['rgb(25 48 47)', '#000000'],
    bgImgName: 'portfolio_transp.png',
    bgGradient: 'linear-gradient(138deg, rgb(255 247 240), rgb(75 73 78))',
    bubbles: [],
  },
  {
    title: 'Annuaire SaExpress',
    date: '2023',
    description:
      "Conception et développement, d'un annuaire en ligne utilisant Active Directory. L'annuaire propose un mode utilisateur afin de consulter des données et un mode administrateur permettant de gérer les comptes.",
    person_count: '4',
    state: 'terminé',
    link: 'https://iut-git.unice.fr/pt102004/sae4_2a',
    technolist: ['react', 'java', 'spring boot', 'SQL', 'Active Directory'],
    displayImageInRow: false,
    gradientColors: ['rgb(109 121 183)', 'rgb(255 255 255)'],
    bgImgName: 'saexpress_transp.png',
    bgGradient: 'linear-gradient(193deg, rgb(255 179 84), rgb(134 177 238))',
    bubbles: [],
  },
  {
    title: 'Instagrans',
    date: '2023',
    description:
      "Conception et développement d'une application fictive de location de grand mère pour faire la cuisine (projet universitaire). L'applications est composée d'un backcend Spring Boot et d'un front end Android (Java). Gestion du pannier, des notifications, de la responsivité, des modes clair et sombre.",
    person_count: '3',
    state: 'terminé',
    technolist: ['java', 'Android (Java)', 'spring boot', 'Maven'],
    displayImageInRow: true,
    gradientColors: ['rgb(48 30 7)', '#2a2a2a'],
    bgImgName: 'instagrans phones.png',
    bgGradient: 'linear-gradient(138deg, rgb(172 138 110), rgb(29 21 14))',
    bubbles: [],
  },
  {
    title: 'Calculator',
    date: '2024',
    description:
      "Conception et développement et déploiement d'une calculatrice web.",
    person_count: '1',
    state: 'En cours',
    technolist: ['REACT', 'JS', 'CSS'],
    displayImageInRow: false,
    gradientColors: ['rgb(19 64 53)', '#2d2d2d'],
    bgImgName: 'calculator_transp.png',
    bgGradient: 'linear-gradient(138deg, rgb(110 172 154) -25%, rgb(3 15 27))',
    bubbles: [],
  },
  {
    title: 'La Babouce',
    date: '2023',
    description:
      "Conception et développement d'un site fictif de vente de chausson. Le site possède une partie client depuis laquelle ils peuvent s'inscrire, se connecter, géré leurs données et commander des articles et une partie admin d'où il est possible de gérer les stocks.",
    person_count: '2',
    state: 'terminé',
    technolist: ['PHP', 'HTML', 'CSS', 'SQL'],
    displayImageInRow: false,
    gradientColors: ['rgb(19 64 53)', '#2d2d2d'],
    bgImgName: 'la babouce_transp.png',
    bgGradient: 'linear-gradient(138deg, rgb(110 172 154) -25%, rgb(3 15 27))',
  },
];

export default worksData;
// bubbles:[
//     // {
//     //     top:"88%",
//     //     left:"79%",
//     //     deg:284,
//     //     scale:"190%",
//     //     colors:["rgb(190 187 121)","rgb(127, 192, 148)"]
//     // },
//     // {
//     //     top: "-3%",
//     //     left: "-3%",
//     //     scale: "179%",
//     //     deg:"160",
//     //     colors:["rgb(255 242 213)", "rgb(0 0 0)"]
//     // }
// ]
