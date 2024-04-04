import "./work.css";
import Technology from "./Technology";
function Work (props){
    let imageSrc= "/portfolio/img/projects/"+props.bgImgName;
    const technos = [];
    const technoIterrator = props.technolist;
    const displayImageInRow = props.displayImageInRow == null ? false : props.displayImageInRow;
    const bgGradient = props.bgGradient == null ? "linear-gradient(138deg, #ffffff, #000000)" : props.bgGradient

    if (technoIterrator!=null){
        for (let i=0; i<technoIterrator.length; i++){
            technos.push(
                <Technology
                    key={("tech_"+i+technoIterrator[i])}
                    title={technoIterrator[i]}
                />
            );
        }
    }

    let stateComplement = props.state === "terminé" ? "finished" : "inDev";
    // stateComplement = "toto";

    return(
        <div className="work" key={"COMP_ID_WORK_"+props.title}>
            <div className="imageContainer"
                style={{backgroundImage:bgGradient}}>

                <img className="workLogo" src={imageSrc} alt={props.title}/>
                    {/*<img className="workLogo" src={imageSrc+"_2.png"} alt={props.title}/>*/}

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
                        <div className="scrollable">
                            <p className="description">{props.description}</p>
                            <div className="workTechnoContainer">
                                {technos}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Work;