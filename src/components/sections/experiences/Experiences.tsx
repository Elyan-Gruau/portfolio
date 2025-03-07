import { Experience } from './experience/Experience.tsx';
import styles from './Experiences.module.scss';
import { FloatingBubble } from '../../style/FloatingBubble/FloatingBubble.tsx';
export const Experiences = () => {
  return (
    <section className={styles.experiences} id="experience">
      <h2>EXPÉRIENCE</h2>
      <div className={styles.experiencesContainer}>
        <Experience
          title="Consultant Technique"
          type="Stage"
          desc="Conception, développement et implémentation d'une solution de reporting automatique au sein du progitiel Planisware Orchestra."
          company="Planisware"
          companyWebsite="https://fr.planisware.com/"
          status="En production"
          location="400 Av. Roumanille Bâtiment 6, 06410 Biot"
          date="04-08/2022"
          technolist={[
            'java',
            'jsp',
            'javascript',
            'sql',
            'maven',
            'jenkins',
            'jira',
            'git',
          ]}
          bubbles={[
            <FloatingBubble
              key={'ConsTechBubble1'}
              relative={true}
              top={'22%'}
              left={'85%'}
              scale={'135%'}
              deg={123}
              animationDelay={-2.6}
              gradient={['rgb(106 170 254)', 'rgb(255,214,152)']}
            />,
          ]}
        />
        <Experience
          title="Developpeur Fullstack"
          type="Alternance"
          desc="Conception, développement et implémentation d'une solution de reporting automatique au sein du progitiel Planisware Orchestra."
          company="Requirement Yogi"
          companyWebsite="https://www.requirementyogi.com/"
          status="En production"
          location="535 Rte des Lucioles, 06560 Valbonne"
          date="04-08/2022"
          technolist={[
            'java',
            'react',
            'sping boot',
            'Typescript',
            'sql',
            'git',
          ]}
          bubbles={[
            <FloatingBubble
              key={'ConsTechBubble1'}
              relative={true}
              top={'22%'}
              left={'85%'}
              scale={'135%'}
              deg={123}
              animationDelay={-2.6}
              gradient={['rgb(106 170 254)', 'rgb(255,214,152)']}
            />,
          ]}
        />

        {/*<Experience title="Consultant Technique"*/}
        {/*            type="Stage"*/}
        {/*            desc="Conception, développement et implémentation d'une solution de reporting automatique au sein du progitiel Planisware Orchestra."*/}
        {/*            company="Planisware"*/}
        {/*            companyWebsite="https://fr.planisware.com/"*/}
        {/*            status="En production"*/}
        {/*            location="GreenSide Batiment 5, 400 Av. Roumanille Bâtiment 6, 06410 Biot"*/}
        {/*            date="04 - 08/2022"*/}
        {/*            technolist={["java","jsp","javascript","sql","git"]}*/}
        {/*/>*/}
      </div>
    </section>
  );
};
