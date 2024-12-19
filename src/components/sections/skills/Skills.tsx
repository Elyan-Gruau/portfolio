import { Skill } from './skill/Skill';
import styles from './Skills.module.scss';
import { FloatingBubble } from '../../style/FloatingBubble/FloatingBubble';
import { Glass } from '../../reusable/glass/Glass';
import ImagedTechnology from '../../reusable/imaged-technology/ImagedTechnology';

const technologies = [
  'Java',
  'Javascript',
  'SCSS',
  'React',
  'PHP',
  'POSTGRESQL',
  'Python',
  'C',
  'GIT',
  'Springboot',
];

export const Skills = () => {
  return (
    <section className={styles.skills} id={'technologies'}>
      <h2>Technologies</h2>
      {/*TODO lors du hover d'une compétence, un bouton tout a droite pop permetant d'afficher les projet métant*/}
      {/*en oeuvre cette techo*/}
      {/*  TODO Organiser en fonction du type */}
      <FloatingBubble
        key={'ConsSkillsBubble8'}
        relative={true}
        top={'37%'}
        left={'4%'}
        scale={'205%'}
        deg={177}
        animationDelay={-1.1}
        gradient={['rgb(176 253 218)', 'rgb(255,101,0)']}
      />
      <div className={styles.skillCont}>
        <div className={styles.container}>
          {technologies.map((tech, index) => (
            <ImagedTechnology key={index} name={tech} />
          ))}
        </div>
      </div>
    </section>
  );
};
