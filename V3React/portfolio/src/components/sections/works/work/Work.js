import "./work.css";
import Technology from "./Technology";
function Work (props){
    const technos = [];
    const technoIterrator = props.technolist;
    if (technoIterrator!=null){
        for (let i=0; i<technoIterrator.length; i++){
            technos.push(
                <Technology title={technoIterrator[i]}/>
            );
        }
    }

    return(
        <div className="work">
            <div className="imageContainer"></div>
            <h2 className="title">{props.title}</h2>
            <div className="workHeader">
                <h3 className="date">{props.date}</h3>
                <p className="person_count">{props.person_count}</p>
                <p className="state">{props.state}</p>
            </div>

            <p className="description">{props.description}</p>
            <div className="workTechnoContainer">
                {technos}
            </div>
            {/*<p className="">{props.person_count}</p>*/}
            {/*<p>work, nombre de personnes, description, liste des techno utilisée ... état (terminé, en cours ...)</p>*/}
        </div>
    );
}
export default Work;