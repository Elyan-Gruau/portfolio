import './work.css';
import { Technology } from './Technology';
export interface WorkProps {
  technolist: any;
  displayImageInRow: boolean;
  bgImgName: string;
  bgGradient?: string;
  state: string;
  title: string;
  date: string;
  person_count: number;
  description: string;
}
export const Work = ({
  technolist,
  bgImgName,
  bgGradient,
  title,
  date,
  state,
  person_count,
  description,
  displayImageInRow = false,
}: WorkProps) => {
  let imageSrc = '/portfolio/img/projects/' + bgImgName;
  const technos = [];
  const technoIterrator = technolist;
  const computedBgGradient =
    bgGradient == null
      ? 'linear-gradient(138deg, #ffffff, #000000)'
      : bgGradient;

  if (technoIterrator != null) {
    for (let i = 0; i < technoIterrator.length; i++) {
      technos.push(
        <Technology
          key={'tech_' + i + technoIterrator[i]}
          title={technoIterrator[i]}
        />
      );
    }
  }

  let stateComplement = state === 'terminé' ? 'finished' : 'inDev';
  // stateComplement = "toto";

  return (
    <div className="work" key={'COMP_ID_WORK_' + title}>
      <div
        className="imageContainer"
        style={{ backgroundImage: computedBgGradient }}
      >
        <img className="workLogo" src={imageSrc} alt={title} />
        {/*<img className="workLogo" src={imageSrc+"_2.png"} alt={props.title}/>*/}
      </div>

      <div className="workDetailsContainer frontFace glass">
        <div className="">
          <div className="textContainer">
            <h2 className="title">{title}</h2>
            <div className="workHeader">
              <h3 className="date">{date}</h3>
              <p className="person_count">{person_count}</p>
              <p className={'state ' + stateComplement}>{state}</p>
            </div>
            <div className="scrollable">
              <p className="description">{description}</p>
              <div className="workTechnoContainer">{technos}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
