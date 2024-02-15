import Search from "./search/Search";
import Work from "./work/Work";

function Works(){

    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    return (
        <section className="s4" id="work">
            <h2>Travaux</h2>
            <Search/>
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
                    description="Conception, devellopement d'un portfolio web."
                    person_count="1"
                    state="en cours"
                    technolist={["react"]}
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
                    title="Instagrans"
                    date="2023"
                    description={"Conception et devellopement d'une application de location de grand mère pour faire la cuisine (project universitaire)."}
                    person_count="3"
                    state="terminé"
                    technolist={["java","Android (Java)","spring boot"]}
                />
                <Work
                    title="Annuaire SaExpress"
                    date="2023"
                    description="Conception et devellopement, d'un annuaire en ligne utilisant Active Directory. L'annuaire propose un mode utilisateur afin de consulter des données et un mode administrateur permenttant de géré les comptes."
                    person_count="4"
                    state="terminé"
                    link="https://iut-git.unice.fr/pt102004/sae4_2a"
                    technolist={["react","java","spring boot","SQL","Active Directory"]}
                />
                <Work
                    title="Rancode"
                    date="2023"
                    description={lorem}
                    person_count="1"
                    state="en cours"
                    technolist={["PHP","HTML","CSS","SQL"]}
                />
            </div>
        </section>
    );
}
export default Works;