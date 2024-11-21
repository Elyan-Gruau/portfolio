import styles from './Presentation.module.scss';
export const Presentation = () => {
  return (
    <section className={`${styles.presentation}`}>
      <div id="profile">
        <div className={styles.profilePic}>
          <img alt="profilePic" src="/src/img/GRUAU-Elyan.png" />
        </div>
        <div className={styles.titles}>
          <h2 id="firstTitle"> Étudiant Développeur</h2>
          <p>Passionné d'informatique et d'UX</p>
        </div>
      </div>
      <a className={styles.bubble} href="#work">
        Consulter les travaux
      </a>
      {/*ANIMATION D ECRITURE*/}
      {/*MAKE YOUR DREAM POSSIBLE*/}
      {/*PHOTO ENCADR2E NEOMORPHISM !!*/}
    </section>
  );
};
