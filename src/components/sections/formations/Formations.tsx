import {Formation} from "./formation/Formation";
import {FloatingBubble} from "../../responsive/FloatingBubble";

function FormationLink() {
    return (
        <div className="formationLink glass"></div>
    );
}

export const Formations = () =>{
    return (
    //     BARRE HORIZONTALE MINIMALISTE AVEC MES EXPERIENCES
    // Ajout d'un bouton en savoir plus qui amène vers linkedin
        <section className="formations">
            <h2>Formation</h2>
            <FloatingBubble
                key={"ConsSkillsBubble8"}
                relative={true}
                top={"33%"}
                left={"24%"}
                scale={"205%"}
                deg={"248"}
                animationDelay={-1.1}
                gradient={[ "rgb(176 253 218)", "rgb(255,111,0)"]}
            />
            <div className="formationsCont">
                <div className="lifeLine">
                </div>
                <Formation title="Baccalauréat général"
                           subtitle="Équivalent BAC S"
                           year="2021"
                           mention="Mention bien"
                           desc="Spécialités : Numerique et science de l'informatique (NSI), Mathématiques, Sciences de l'ingénieur"
                           location="Lycée Thomas Edison, 83510 Lorgues" />
                <FormationLink/>
                <Formation title="DUT Informatique"
                           subtitle="Diplome Universitaire de Technologie Informatique"
                           year="2021 - 2023"
                           desc="Parcours Réalisation d’applications : conception, développement, validation"
                           location="IUT Nice Côte d'Azur, 06000 Nice" />

                <FormationLink/>
                <Formation title="L3 MIASHS - MIAGE"
                           subtitle="Mathématiques et informatique appliquées aux sciences humaines et sociales"
                           year="2023 - 2024"
                           mention="Major de promotion"
                           desc="Parcours Méthodes Informatiques Appliquées à la Gestion des Entreprises"
                           location="1645 Rte des Lucioles, 06410 Biot" />

                {/*<Formation title="Master MIAGE"*/}
                {/*           year="2024 - 2026"*/}
                {/*           mention="Mention bien"*/}
                {/*           desc="Numerique et science de l'informatique, Mathématiques"*/}
                {/*           location=" DESCRIPTIODNnndsdsdssdsdsddssddssddssd" />*/}

            </div>

        </section>
    );
}