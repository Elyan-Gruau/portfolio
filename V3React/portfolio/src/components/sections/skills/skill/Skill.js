import './skill.css'
function Skill(props){
    return (
        <div className="skill">
            <div className="SkillName">

            </div>
            <div className="SkillBar">

            </div>
            <p>{props.name}</p>
        </div>
    );
}
export default Skill;