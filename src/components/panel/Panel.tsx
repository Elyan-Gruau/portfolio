import styles from './Panel.module.scss';
import ToggleSwitch from '../input/toggleSwitch/ToggleSwitch.tsx';

export interface PanelProps {}

export const Panel = ({}: PanelProps) => {
  let state = 'closed';

  const changeColorMode = () => {
    const htmlElement = document.getElementsByTagName('html')[0];
    const classList = htmlElement.classList;
    if (classList.contains('lightMode')) {
      htmlElement.classList.remove('lightMode');
    } else {
      htmlElement.classList.add('lightMode');
    }
  };

  return (
    <div id="panel" className={state}>
      <div className={styles.container}>
        <a className={styles.menuButton} href="#work">
          TRAVAUX
        </a>
        <a className={styles.menuButton} href="#technology">
          TECHNOLOGIES
        </a>
        <a className={styles.menuButton} href="#experience">
          EXPÉRIENCE
        </a>
        <a className={styles.menuButton} href="#contactForm">
          CONTACT
        </a>
        <a
          className={styles.menuButton}
          href="/portfolio/docs/GRUAU_Elyan_CV.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Curiculum
        </a>
      </div>
      <div className={styles.panelFooter}>
        <div className={styles.settingsContainer}>
          {/*<ToggleSwitch*/}
          {/*    name="Animations"*/}
          {/*    disabled={true}*/}
          {/*    onClick={changeColorMode}*/}
          {/*/>*/}
          {/*<ToggleSwitch*/}
          {/*    name="Mode clair"*/}
          {/*    onClick={changeColorMode}*/}
          {/*    disabled={false}*/}
          {/*    id="lightMode"*/}
          {/*/>*/}
        </div>
        <div className={styles.contactContainer}>
          <a className={styles.phone} href="tel:+33650085321">
            06 50 08 53 21
          </a>
          <a
            className={styles.mail}
            href="mailto:elyangruau.pro@gmail.com?subject=Entretient"
          >
            elyangruau.pro@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};
