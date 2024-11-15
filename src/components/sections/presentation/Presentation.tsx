import './presentation.css';
export const Presentation = () => {
  return (
    <section className="presentation presentationBackground">
      <div id="profile">
        <div className={'profilePic'}>
          <img alt="profilePic" src="/portfolio/img/GRUAU Elyan.jpg" />
        </div>
        <div className={'titles'}>
          <h2 id="firstTitle presentationBackground"> Étudiant Développeur</h2>
          <p>Passionné d'informatique et d'UX</p>
        </div>
      </div>
      <a className={'bubble'} href="#work">
        Consulter les travaux
      </a>
      {/*ANIMATION D ECRITURE*/}
      {/*MAKE YOUR DREAM POSSIBLE*/}
      {/*PHOTO ENCADR2E NEOMORPHISM !!*/}
    </section>
  );
};
