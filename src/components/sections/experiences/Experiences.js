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
                                top={"77%"}
                                left={"73%"}
                                scale={"235%"}
                                deg={"104"}
                                animationDelay={-4.1}
                                gradient={[ " rgb(253 176 236)", "rgb(0,81,255)"]}
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