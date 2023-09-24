import Experience from "./experience/Experience";
import "./experiences.css";
function Experiences () {
    return (
        <section className="Experiences">
            <h2>Experience</h2>
            <div className="experiencesContainer">
                <Experience title="Consultant Technique"
                            type="Stage"
                            desc="Conception et développement d'une solution de reporting automatique"
                            company="Planisware"
                            companyWebsite="https://fr.planisware.com/"
                            status="En production"
                            location="GreenSide Batiment 5, 400 Av. Roumanille Bâtiment 6, 06410 Biot"
                            date="04 - 08/2022"
                            technolist={["java","jsp","javascript","sql","git"]}
                />

            </div>
        </section>
    );
}
export default Experiences;