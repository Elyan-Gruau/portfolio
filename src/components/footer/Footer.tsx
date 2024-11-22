import styles from './Footer.module.scss';
import { FloatingBubble } from '../style/FloatingBubble/FloatingBubble';
import { Glass } from '../reusable/glass/Glass';
import { LinkButton } from '../link-button/LinkButton';
export const Footer = () => {
  return (
    <footer id="contact">
      <FloatingBubble
        relative={true}
        top={'67%'}
        left={'46%'}
        scale={'255%'}
        deg={189}
        animationDelay={-2.5}
        gradient={['rgb(255,0,200)', 'rgb(0,81,255)']}
      />
      <Glass className={styles.container}>
        <div className={styles.buttonContainer}>
          <LinkButton
            href={'mailto:elyangruau.pro@gmail.com?subject=Entretient'}
            title={'envoyer email'}
            icon={'mail'}
            className={styles.button}
          />
          <LinkButton
            href={'https://www.linkedin.com/in/elyan-gruau-a62397243/'}
            title={'Linkedin'}
            icon={'linkedin'}
            className={styles.button}
          />
          <LinkButton
            href={'https://github.com/Elyan-Gruau'}
            title={'Github'}
            icon={'github'}
            className={styles.button}
          />
          {/*<a href=" https://discordapp.com/users/484843311849537536"*/}
          {/*   target="_blank"*/}
          {/*   rel="noreferrer"*/}
          {/*   className="button_discord">*/}
          {/*    Discord*/}
          {/*</a>*/}
        </div>

        <span className={styles.author}>
          Développé par Elyan GRUAU - Tous droits réservés © - 2024
        </span>
      </Glass>
    </footer>
  );
};
