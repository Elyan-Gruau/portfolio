import Technology from "../../works/work/Technology";

function Experience (props) {
    let imgPath = "/portfolio/img/companies/"+props.company+".png";
    const technos = [];
    const technoIterrator = props.technolist;
    if (technoIterrator!=null){
        for (let i=0; i<technoIterrator.length; i++){
            technos.push(
                <Technology
                    key={("tech_"+i+technoIterrator[i]+"_"+props.company)}
                    title={technoIterrator[i]}
                />
            );
        }
    }
    return (
        <div className="experience movingBackground">
            {props.bubbles}
            <div className="glass">
                <a className="companyLogoContainer"
                   href={props.companyWebsite} target="_blank" rel="noreferrer">
                    <img src={imgPath} alt={props.company} />
                </a>
                <h2 className="title" >{props.title}</h2>
                <div className="textContainer">
                    <div className="experienceHeader">
                        <p className="date">{props.date}</p>
                        <p className="type">{props.type}</p>
                        <p className="status">{props.status}</p>
                    </div>
                    <p className="description">{props.desc}</p>
                    <p className="location">{props.location}</p>
                    {/*<p>{props.company}</p>*/}
                </div>
                <div className="workTechnoContainer">
                    {technos}
                </div>
            </div>
        </div>
    );
}
export default Experience;