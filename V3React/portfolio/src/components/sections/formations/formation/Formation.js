import "./formation.css";
function Formation(props){
    return(
        <div className="formation movingBackground animateOnDisplay">
            <div className="glass">
                <h2 className="title">{props.title}</h2>
                <h2 className="subtitle">{props.subtitle}</h2>
                <h3 className="year">{props.year}</h3>
                <p className="mention">{props.mention}</p>
                <p className="description">{props.desc}</p>
                <p className="location">
                    {props.location}
                </p>
            </div>
        </div>
    );
}
export default Formation;