import "./work.css";
import Technology from "./Technology";
function Work (props){
    let imageSrc= "/portfolio/img/projects/"+props.title.replace("\*","").toLowerCase();
    const technos = [];
    const technoIterrator = props.technolist;
    const displayImageInRow = props.displayImageInRow == null ? false : props.displayImageInRow;

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
        <div className="work">
            <div className="imageContainer" >
                <div className={"glass "+(displayImageInRow ? "inRow" : "inColumn")}>
                    <img className="workLogo" src={imageSrc+"_1.png"} alt={props.title}/>
                    <img className="workLogo" src={imageSrc+"_2.png"} alt={props.title}/>
                </div>
            </div>

            <div className="workDetailsContainer frontFace glass">
                <div className="">
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
                </div>
            </div>

        </div>
    );
}
export default Work;