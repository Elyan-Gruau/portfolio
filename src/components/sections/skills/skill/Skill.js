import './skill.css'
export const Skill = (props) =>{
    //const name = props.name.replace(" ","_").replace("(","").replace(")","").toLowerCase();
    //const bar = renderBar("--CleanBlack");
    // const name= "allSkill";
    const barStyle = {
        color: "#fff",
        width: props.value+"%"
    };
    // const barStyleHover = {
    //
    // }



    return (
        <div className="skill ">
            <div className="skillName">
                <p>{props.name}</p>
            </div>
            <div className="skillBarContainer tooltip" >
                <span className="tooltiptext">{props.value}/100</span>
                <div className="skillBarGlass">
                    <div className="skillBarValue "  style={barStyle}>

                    </div>
                </div>
            </div>
        </div>
    );
}
