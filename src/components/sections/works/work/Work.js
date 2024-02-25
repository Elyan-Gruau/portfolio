import "./work.css";
import Technology from "./Technology";
function Work (props){
    let imageSrc= "/portfolio/img/projects/"+props.title.replace("\*","").toLowerCase()+".png";
    const technos = [];
    const technoIterrator = props.technolist;
    if (technoIterrator!=null){
        for (let i=0; i<technoIterrator.length; i++){
            technos.push(
                <Technology title={technoIterrator[i]}/>
            );
        }
    }

    let stateComplement = props.state === "terminé" ? "finished" : "inDev";
    // stateComplement = "toto";

    return(
        <div className="work movingBackground">
            <div className="glass">
                <div className="imageContainer">
                    <img className="workLogo" src={imageSrc} alt={props.title}/>
                </div>
                <div className="textContainer">
                    <h2 className="title">{props.title}</h2>
                    <div className="workHeader">
                        <h3 className="date">{props.date}</h3>
                        <p className="person_count">{props.person_count}</p>
                        <p className={"state "+stateComplement}>{props.state}</p>
                    </div>

                    <p className="description">{props.description}</p>

                </div>
                <div className="workTechnoContainer">
                    {technos}
                </div>

                {/*<p className="">{props.person_count}</p>*/}
                {/*<p>work, nombre de personnes, description, liste des techno utilisée ... état (terminé, en cours ...)</p>*/}
            </div>
        </div>
    );
}
export default Work;