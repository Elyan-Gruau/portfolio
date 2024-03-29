import Work from "../sections/works/work/Work";

let worksData = [
    {
        title:"Kill Bique",
        date:"2022",
        description:"Numérisation du jeu de carte Kill Bique. Implémentation d'IA. Solution multijoueur (client serveur) respectant le modèle MVC. ",
        person_count:"8",
        state:"terminé",
        technolist:["java","javaFx"],
        gradientColors:["rgb(21 38 43)","#000000"],
        nbGradient:"linear-gradient(172deg, rgb(243 185 185), rgb(38 33 24))",
        displayImageInRow:false,
        bubbles:[
            {
                top:"-8%",
                left:"48%",
                scale:"180%",
                colors:["rgb(0,250,255)","rgb(255,0,192)"]
            },
            {
                top: "9%",
                left: "23%",
                colors:["rgb(222,222,222)","#8d7fc0"]
            }
        ]
    },
    {
        title:"Portfolio",
        date:"2023",
        description:"Conception, développement et déploiement d'un portfolio web. Le site est hébergé sur GitHub Pages.",
        person_count:"1",
        state:"en cours",
        technolist:["react","css"],
        displayImageInRow:false,
        gradientColors:["rgb(25 48 47)","#000000"],
        bgImgName:"portfolio_transp.png",
        bgGradient:"linear-gradient(138deg, rgb(255 247 240), rgb(75 73 78))",
        bubbles:[
            {
                top: "4%",
                left: "40%",
                colors:[ "rgb(0 53 108)","rgb(0 155 69)"],
                scale: "250%"
            },
            {
                top: "89%",
                left: "82",
                deg:"303",
                colors:["#C79428","rgb(255 160 160)"],
                scale: "203%"
            }
        ]
    },
    {
        title: "Annuaire SaExpress",
        date: "2023",
        description: "Conception et développement, d'un annuaire en ligne utilisant Active Directory. L'annuaire propose un mode utilisateur afin de consulter des données et un mode administrateur permettant de gérer les comptes.",
        person_count: "4",
        state: "terminé",
        link: "https://iut-git.unice.fr/pt102004/sae4_2a",
        technolist: ["react", "java", "spring boot", "SQL", "Active Directory"],
        displayImageInRow:false,
        gradientColors:["rgb(14 30 60)","#151515"],
        bgImgName:"annuaire SaExpress.png",
        bgGradient:"linear-gradient(193deg, rgb(0 41 255 / 28%), rgb(17 0 192))",
        bubbles:[
            {
                colors:["#FBBC99","rgb(255 108 0)"],
                top: "4%",
                left: "85%",
                scale: "300%"
            },
            {
                top: "52%",
                left: "2%",
                colors:["rgb(255 0 0)","rgb(55, 0, 255)"],
                scale: "200%"
            }
        ]
    },
    {
        title : "Instagrans",
        date : "2023",
        description : "Conception et développement d'une application fictive de location de grand mère pour faire la cuisine (projet universitaire). L'applications est composée d'un backcend Spring Boot et d'un front end Android (Java). Gestion du pannier, des notifications, de la responsivité, des modes clair et sombre.",
        person_count : "3",
        state : "terminé",
        technolist : ["java", "Android (Java)", "spring boot", "Maven"],
        displayImageInRow:true,
        gradientColors:["rgb(48 30 7)","#2a2a2a"],
        bgImgName:"instagrans phones.png",
        bgGradient:"linear-gradient(138deg, rgb(172 138 110), rgb(29 21 14))",
        bubbles:[
            {
                top:"59%",
                left:"44%",
                scale:"180%",
                colors:["rgb(255 158 0)","#000000"]
            },
            {
                top:"-8%",
                left:"92%",
                scale: "239%",
                colors:["rgb(222,222,222)","#8d7fc0"]
            }
        ]
    },
    {
        title : "Instagrans",
        date : "2023",
        description : "Conception et développement d'une application fictive de location de grand mère pour faire la cuisine (projet universitaire). L'applications est composée d'un backcend Spring Boot et d'un front end Android (Java). Gestion du pannier, des notifications, de la responsivité, des modes clair et sombre.",
        person_count : "3",
        state : "terminé",
        technolist : ["java", "Android (Java)", "spring boot", "Maven"],
        displayImageInRow:true,
        gradientColors:["rgb(48 30 7)","#2a2a2a"],
        bgImgName:"instagrans phones.png",
        bgGradient:"linear-gradient(138deg, rgb(172 138 110), rgb(29 21 14))",
        bubbles:[
            {
                top:"59%",
                left:"44%",
                scale:"180%",
                colors:["rgb(255 158 0)","#000000"]
            },
            {
                top:"-8%",
                left:"92%",
                scale: "239%",
                colors:["rgb(222,222,222)","#8d7fc0"]
            }
        ]
    },
    {
        title : "La Babouce",
        date : "2023",
        description : "Conception et développement d'un site fictif de vente de chausson. Le site possède une partie client depuis laquelle ils peuvent s'inscrire, se connecter, géré leurs données et commander des articles et une partie admin d'où il est possible de gérer les stocks.",
        person_count:"2",
        state:"terminé",
        technolist: ["PHP", "HTML", "CSS", "SQL"],
        displayImageInRow:false,
        gradientColors:["rgb(19 64 53)","#2d2d2d"],
        bgImgName:"la babouce.png",
        bgGradient:"linear-gradient(138deg, rgb(110 172 154) -25%, rgb(3 15 27))",
        bubbles:[
            {
                top:"88%",
                left:"79%",
                deg:284,
                scale:"190%",
                colors:["rgb(190 187 121)","rgb(127, 192, 148)"]
            },
            {
                top: "-3%",
                left: "-3%",
                scale: "179%",
                deg:"160",
                colors:["rgb(255 242 213)", "rgb(0 0 0)"]
            }
        ]
    }
];

export default worksData ;