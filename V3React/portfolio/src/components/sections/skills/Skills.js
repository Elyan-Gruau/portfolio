import Skill from "./skill/Skill";
import "./Skills.css";

function Skills(){
    return (
        <div className="skills">
            <h2>Technologies</h2>
            {/*TODO lors du hover d'une compétence, un bouton tout a droite pop permetant d'afficher les projet métant*/}
            {/*en oeuvre cette techo*/}
            <div className="skillCont">
                <div className="leftPart">
                    <Skill name="Java"/>
                    <Skill name="JavaScript"/>
                    <Skill name="HTML/CSS"/>
                    <Skill name="React"/>
                    <Skill name="Android (Java)"/>
                </div>
                <div className="rightPart">
                    <Skill name="PHP"/>
                </div>
            </div>
        </div>
    );
}
export default Skills;