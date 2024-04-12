import Experience from "./experience/Experience";
import "./experiences.css";
import {FloatingBubble} from "../../responsive/FloatingBubble";
function Experiences () {
    return (
        <section className="Experiences" id="experience">
            <h2>EXPÉRIENCE</h2>
            <div className="experiencesContainer">
                <Experience
                    title="Consultant Technique"
                            type="Stage"
                            desc="Conception, développement et implémentation d'une solution de reporting automatique au sein du progitiel Planisware Orchestra."
                            company="Planisware"
                            companyWebsite="https://fr.planisware.com/"
                            status="En production"
                            location="400 Av. Roumanille Bâtiment 6, 06410 Biot"
                            date="04-08/2022"
                            technolist={["java","jsp","javascript","sql","maven","jenkins","jira","git"]}
                            bubbles={  [<FloatingBubble
                                key={"ConsTechBubble1"}
                                relative={true}
                                top={"22%"}
                                left={"85%"}
                                scale={"135%"}
                                deg={"123"}
                                animationDelay={-2.6}
                                gradient={[ "rgb(106 170 254)", "rgb(255,214,152)"]}
                            />]}
                />

                {/*<Experience title="Consultant Technique"*/}
                {/*            type="Stage"*/}
                {/*            desc="Conception, développement et implémentation d'une solution de reporting automatique au sein du progitiel Planisware Orchestra."*/}
                {/*            company="Planisware"*/}
                {/*            companyWebsite="https://fr.planisware.com/"*/}
                {/*            status="En production"*/}
                {/*            location="GreenSide Batiment 5, 400 Av. Roumanille Bâtiment 6, 06410 Biot"*/}
                {/*            date="04 - 08/2022"*/}
                {/*            technolist={["java","jsp","javascript","sql","git"]}*/}
                {/*/>*/}

            </div>
        </section>
    );
}
export default Experiences;