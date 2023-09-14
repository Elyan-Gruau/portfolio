import Formation from "./formation/Formation";

function Formations(){
    return (
        <section className="s3 parcours">
            <h3>Parcour</h3>
            BARRE HORIZONTALE MINIMALISTE AVEC MES EXPERIENCES
            Ajout d'un bouton en savoir plus qui amène vers linkedin


            <div className="invertedScrollArea">

                <div className="lifeLine">
                </div>
                <Formation title="Baccalauréat général"
                           year="2021"
                           mention="Mention bien"
                           desc="Numerique et science de l'informatique, Mathématiques"
                           location=" Lycée Thomas Edison - Lorgues, Var" />

                <Formation title="DUT Informatique"
                           year="2021 - 2023"
                           mention="Diplome Universitaire de Technologie"
                           desc="Parcours Réalisation d’applications : conception, développement, validation"
                           location=" IUT Nice Côte d'Azur" />


                <Formation title="L3 MIASHS - MIAGE"
                           year="2023 - 2024"
                           mention="Mention bien"
                           desc="Méthodes Informatiques Appliquées à la Gestion des Entreprises"
                           location="DESCRIPTIODNnndsdsdssdsdsddssddssddssd" />

                <Formation title="Master MIAGE"
                           year="2024 - 2026"
                           mention="Mention bien"
                           desc="Numerique et science de l'informatique, Mathématiques"
                           location=" DESCRIPTIODNnndsdsdssdsdsddssddssddssd" />

            </div>

        </section>
    );
}
export default Formations;