import { Technology } from '../../works/work/Technology';
import { Glass } from '../../../reusable/glass/Glass';
import styles from '../Experiences.module.scss';

export interface ExperienceProps {
  company: string;
  technolist: any; //todo
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
    <div className={`${styles.experience} ${styles.movingBackground}`}>
      {bubbles}
      <Glass>
        <a
          className={styles.companyLogoContainer}
          href={companyWebsite}
          target="_blank"
          rel="noreferrer"
        >
          <img src={imgPath} alt={company} />
        </a>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.textContainer}>
          <div className={styles.experienceHeader}>
            <p className={styles.date}>{date}</p>
            <p className={styles.type}>{type}</p>
            <p className={styles.status}>{status}</p>
          </div>
          <p className={styles.description}>{desc}</p>
          <p className={styles.location}>{location}</p>
          {/*<p>{props.company}</p>*/}
        </div>
        <div className={styles.workTechnoContainer}>{technos}</div>
      </Glass>
    </div>
  );
};
