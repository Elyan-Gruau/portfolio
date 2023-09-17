import './skill.css'
function Skill(props){
    return (
        <div className="skill">
            <div className="skillName">
                <p>{props.name}</p>
            </div>
            <div className="skillBar">

            </div>

            <button className="skillButton">
                +
            </button>

        </div>
    );
}
export default Skill;