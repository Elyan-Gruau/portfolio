import styles from './Skills.module.scss';
import ImagedTechnology from '../../reusable/imaged-technology/ImagedTechnology';
import Filters, { Filter } from '../../reusable/filter/Filters';
import filters from '../../reusable/filter/Filters';
import { useState } from 'react';

const DATABASE_MAIN_TECHNOLOGIES = ['POSTGRESQL'];
const DATABASE_TECHNOLOGIES = [
  ...DATABASE_MAIN_TECHNOLOGIES,
  'MONGODB',
  'MYSQL',
  'SQLITE',
];

const BACKEND_MAIN_TECHNOLOGIES = ['Java', 'Springboot', 'Maven'];
const BACKEND_TECHNOLOGIES = [
  ...BACKEND_MAIN_TECHNOLOGIES,
  'Python',
  'C',
  'PHP',
];

const FRONTEND_MAIN_TECHNOLOGIES = ['React', 'SCSS', 'Typescript'];
const FRONTEND_TECHNOLOGIES = [
  ...FRONTEND_MAIN_TECHNOLOGIES,
  'Angular',
  'NodeJs',
];

const FILTERS: Filter[] = [
  {
    label: 'Habituels',
    key: 'MAIN',
  },
  { label: 'Tous', key: 'ALL' },
];

export const Skills = () => {
  const [selectedFilter, setSelectedFilter] = useState<Filter>(FILTERS[0]);
  const handleOnFilterChange = (filter: Filter) => setSelectedFilter(filter);

  const isMain = selectedFilter.key == 'MAIN';

  const displayedBackendTechnologies = isMain
    ? BACKEND_MAIN_TECHNOLOGIES
    : BACKEND_TECHNOLOGIES;
  const displayedFrontendTechnologies = isMain
    ? FRONTEND_MAIN_TECHNOLOGIES
    : FRONTEND_TECHNOLOGIES;
  const displayedDatabaseTechnologies = isMain
    ? DATABASE_MAIN_TECHNOLOGIES
    : DATABASE_TECHNOLOGIES;

  return (
    <section className={styles.skills} id={'technologies'}>
      <h2>Technologies</h2>
      {/*TODO lors du hover d'une compétence, un bouton tout a droite pop permetant d'afficher les projet métant*/}
      {/*en oeuvre cette techo*/}
      {/*  TODO Organiser en fonction du type */}
      <div className={styles.container}>
        <div className={styles.buttonContainer}>
          <Filters
            filters={FILTERS}
            selectedFilter={selectedFilter}
            onChange={handleOnFilterChange}
          />
        </div>
        <div className={styles.skillCont}>
          <SkillContainer
            title={'Front-End'}
            technologies={displayedFrontendTechnologies}
          />
          <SkillContainer
            title={'Back-End'}
            technologies={displayedBackendTechnologies}
          />
          <SkillContainer
            title={'Base de données'}
            technologies={displayedDatabaseTechnologies}
          />
        </div>
      </div>
    </section>
  );
};

interface SkillContainerProps {
  title: string;
  technologies: string[];
}
const SkillContainer = ({ title, technologies }: SkillContainerProps) => {
  return (
    <div className={styles.skillContainer}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.skills}>
        {technologies.map((tech, index) => (
          <ImagedTechnology key={index} name={tech} />
        ))}
      </div>
    </div>
  );
};
