import Skill from "./skill/Skill";

function Skills(){
    return (
        <div className="technology">
            <h2>Technologies</h2>
            <p>TODO lors du hover d'une compétence, un bouton tout a droite pop permetant d'afficher les projet métant
                en oeuvre cette techo</p>
            <Skill name="Java"/>
            <Skill name="JavaScript"/>
            <Skill name="HTML/CSS"/>
            <Skill name="React"/>
            <Skill name="Android (Java)"/>
        </div>
    );
}
export default Skills;