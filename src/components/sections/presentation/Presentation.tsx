import styles from "@sections/presentation/Presentation.module.scss";
export const Presentation = () => {
  return (
    <section className={`${styles.presentation}`}>
      <div id="profile" className={styles.profile}>
        <div className={styles.profilePic}>
          <img alt="profilePic" src="/img/GRUAU-Elyan.png" />
        </div>
        <div className={styles.titles}>
          <h2 id="firstTitle"> Étudiant Développeur</h2>
          <p>Passionné d'informatique et d'UX</p>
          {/* ADD a (+) glass button to display a more precise description */}
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
