import { Technology } from '../../works/work/Technology';
import { Glass } from '../../../reusable/glass/Glass';

export interface ExperienceProps {
  company: string;
  technolist: any;
  title: string;
  location: string;
  desc: string;
  status: string;
  type: string;
  date: string;
}
export const Experience = ({
  bubbles,
  companyWebsite,
  company,
  technolist,
  title,
  location,
  desc,
  status,
  type,
  date,
}: ExperienceProps) => {
  let imgPath = '/portfolio/img/companies/' + company + '.png';
  const technos = [];
  const technoIterrator = technolist;
  if (technoIterrator != null) {
    for (let i = 0; i < technoIterrator.length; i++) {
      technos.push(
        <Technology
          key={'tech_' + i + technoIterrator[i] + '_' + company}
          title={technoIterrator[i]}
        />
      );
    }
  }
  return (
    <div className="experience movingBackground">
      {bubbles}
      <Glass>
        <a
          className="companyLogoContainer"
          href={companyWebsite}
          target="_blank"
          rel="noreferrer"
        >
          <img src={imgPath} alt={company} />
        </a>
        <h2 className="title">{title}</h2>
        <div className="textContainer">
          <div className="experienceHeader">
            <p className="date">{date}</p>
            <p className="type">{type}</p>
            <p className="status">{status}</p>
          </div>
          <p className="description">{desc}</p>
          <p className="location">{location}</p>
          {/*<p>{props.company}</p>*/}
        </div>
        <div className="workTechnoContainer">{technos}</div>
      </Glass>
    </div>
  );
};
