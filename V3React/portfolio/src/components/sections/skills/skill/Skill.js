import './skill.css'
function Skill(props){
    return (
        <div className="skill">
            <div className="skillName">
                <p>{props.name}</p>
            </div>
            <div className="skillBar">

            </div>

            <div className="skillButton">
                <a>Pipo</a>
            </div>

        </div>
    );
}
export default Skill;