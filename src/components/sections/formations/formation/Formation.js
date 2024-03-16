import "./formation.css";
function Formation(props){

    const Mention = () => {
        if (props.mention){
            return <p className="mention">{props.mention}</p>
        }
    }

    return(
        <div className="formation movingBackground ">
            <div className="glass">
                <h2 className="title">{props.title}</h2>
                <h2 className="subtitle">{props.subtitle}</h2>
                <h3 className="year">{props.year}</h3>
                <Mention/>
                <p className="description">{props.desc}</p>
                <p className="location">
                    {props.location}
                </p>
            </div>
        </div>
    );
}
export default Formation;