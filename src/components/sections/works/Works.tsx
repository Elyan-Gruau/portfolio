import {Search} from "./search/Search";
import {Work} from "./work/Work";

export const Works = () =>{

    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut " +
        "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip " +
        "ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat " +
        "nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    return (
        <section className="s4" id="work">
            <h2>Travaux</h2>
            {/*<Search/>*/}
            {/*CARROUSEL AVEC BORD EN FONDU POUR INQIQUER LE SCROLL*/}
            {/*CARTE ? AFFICHER LE NOMBRE DE PARTICIPANT AVEC UN NOMBRE A CÔTE DUN BONHOME DE PERSONNE*/}
            <div className="workContainer">
                <Work
                    title="Kill Bique"
                    date="2022"
                    description="Numérisation du jeu de carte Kill Bique. Implémentation d'IA. Solution multijoueur (client serveur)
                     respectant le modèle MVC. "
                    person_count="8"
                    state="terminé"
                    technolist={["java","javaFx"]}
                />
                <Work
                    title="Portfolio"
                    date="2023"
                    description="Conception, développement et déploiement d'un portfolio web.
                    Le site est hébergé sur GitHub Pages."
                    person_count="1"
                    state="en cours"
                    technolist={["react","css"]}
                />
                {/*<Work*/}
                {/*    title="Tic-Tac-Toe"*/}
                {/*    date="2022"*/}
                {/*    description={lorem}*/}
                {/*    person_count="1"*/}
                {/*    state="en cours"*/}
                {/*    technolist={["java","react","spring boot"]}*/}
                {/*/>*/}
                <Work
                    title="Annuaire SaExpress"
                    date="2023"
                    description="Conception et développement, d'un annuaire en ligne utilisant Active Directory.
                    L'annuaire propose un mode utilisateur afin de consulter des données et un mode administrateur permettant de gérer les comptes."
                    person_count="4"
                    state="terminé"
                    link="https://iut-git.unice.fr/pt102004/sae4_2a"
                    technolist={["react","java","spring boot","SQL","Active Directory"]}
                />
                <Work
                    title="Instagrans"
                    date="2023"
                    description="Conception et développement d'une application fictive de location de grand mère pour faire la cuisine (projet universitaire).
                    L'applications est composée d'un backcend Spring Boot et d'un front end Android (Java).
                    Gestion du pannier, des notifications, de la responsivité, des modes clair et sombre."
                    person_count="3"
                    state="terminé"
                    technolist={["java","Android (Java)","spring boot","Maven"]}
                />
                {/*<Work*/}
                {/*    title="Rancode"*/}
                {/*    date="2023"*/}
                {/*    description={lorem}*/}
                {/*    person_count="1"*/}
                {/*    state="en cours"*/}
                {/*    technolist={["PHP","HTML","CSS","SQL"]}*/}
                {/*/>*/}
                <Work
                    title="La Babouce*"
                    date="2023"
                    description="Conception et développement d'un site fictif de vente de chausson. Le site possède une
                    partie client depuis laquelle ils peuvent s'inscrire, se connecter, géré leurs données et commander
                    des articles et une partie admin d'où il est possible de gérer les stocks."
                    person_count="2"
                    state="terminé"
                    technolist={["PHP","HTML","CSS","SQL"]}
                />
            </div>
        </section>
    );
}