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
                    <Skill name="Java" value="0"/>
                    <Skill name="JavaScript "  value="50"/>
                    <Skill name="HTML/CSS"  value="100"/>
                    <Skill name="React"  value="50"/>
                    <Skill name="Android (Java)"  value="50"/>
                </div>
                <div className="rightPart">
                    <Skill name="PHP"  value="50"/>
                    <Skill name="SQL" value="50"/>
                    <Skill name="Python" value="50"/>
                    <Skill name="JSP" value="50"/>
                    <Skill name="C" value="50"/>
                    <Skill name="Git" value="50"/>
                </div>
            </div>
        </div>
    );
}
export default Skills;