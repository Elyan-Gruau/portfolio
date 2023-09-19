import './skill.css'
function Skill(props){
    const name = props.name.replace(" ","_").replace("(","").replace(")","").toLowerCase();
    //const bar = renderBar("--CleanBlack");
    const barHover = renderBar("--color_"+name);
    const barStyle = {
        color: "#fff",
        backgroundImage: barHover,
        boxShadow: "none"
    };
    const barStyleHover = {

    }

    function renderBar (color) {
       return "linear-gradient(90deg, var("+color+") "+props.value+"%, transparent "+props.value+"%)"
    }

    return (
        <div className="skill">
            <div className="skillName">
                <p>{props.name}</p>
            </div>
            <div className="skillBarValue"  style={barStyle}>
                <div className="skillBar">

                </div>
            </div>


            <button className="skillButton">
                +
            </button>

        </div>
    );
}
export default Skill;