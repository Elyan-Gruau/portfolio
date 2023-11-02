import './skill.css'
function Skill(props){
    //const name = props.name.replace(" ","_").replace("(","").replace(")","").toLowerCase();
    //const bar = renderBar("--CleanBlack");
    const name= "allSkill";
    const barStyle = {
        color: "#fff",
        width: props.value+"%",
        boxShadow: "none"
    };
    const barStyleHover = {

    }



    return (
        <div className="skill ">
            <div className="skillName">
                <p>{props.name}</p>
            </div>
            <div className="skillBarContainer movingBackground tooltip" >
                <span className="tooltiptext">{props.value}/100</span>
                <div className="skillBarGlass glass">
                    <div className="skillBarValue "  style={barStyle}>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Skill;