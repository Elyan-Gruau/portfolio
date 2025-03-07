import styles from './work.module.scss';
import glass from '../../../../style/glass.module.scss';
import { Technology } from './Technology.tsx';
import { Glass } from '../../../reusable/glass/Glass.tsx';
import { useState } from 'react';

export type WorkType = {
  technolist: string[];
  displayImageInRow: boolean;
  bgImgName: string;
  bgGradient?: string;
  state: string;
  title: string;
  date: string;
  person_count: number;
  description: string;
};

export interface WorkProps {
  work: WorkType;
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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  let imageSrc = '/portfolio/img/projects/' + bgImgName;
  const technos = [];
  const technoIterrator = technolist;
  console.log('bgGradient', bgGradient);
  const computedBgGradient =
    bgGradient ?? 'linear-gradient(138deg, #ffffff, #000000)';
  console.log('computedBgGradient', computedBgGradient);
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

  const handleOnClick = (e) => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={`${styles.work} ${isOpen ? styles.open : ''}`}
      key={'COMP_ID_WORK_' + title}
      onClick={handleOnClick}
    >
      <div
        className={`${styles.imageContainer}`}
        style={{ backgroundImage: computedBgGradient }}
      >
        <img className={styles.workLogo} src={imageSrc} alt={title} />
        {/*<img className="workLogo" src={imageSrc+"_2.png"} alt={props.title}/>*/}
      </div>

      <div className={`${styles.workDetailsContainer}`}>
        <Glass className={styles.glass}>
          <div className={styles.textContainer}>
            <h2 className={styles.title}>{title}</h2>
            <div className={`${styles.workHeader}`}>
              <h3 className={styles.date}>{date}</h3>
              <p className={styles.personCount}>{person_count}</p>
              <p className={`${styles.state} ${stateComplement}`}>{state}</p>
            </div>
            <div className={`${styles.scrollable}`}>
              <p className={styles.description}>{description}</p>
              <div className={styles.workTechnoContainer}>{technos}</div>
            </div>
          </div>
        </Glass>
      </div>
    </div>
  );
};
