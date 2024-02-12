import "./presentation.css";
function Presentation () {
    return (
        <section className="presentation presentationBackground">

            <div id="profile">
                <div className={"profilePic"}>
                    <img alt="profilePic" src="/portfolio/img/profile-pic%20-%20transp.png"/>
                </div>
                <div className={"titles"}>
                    <h2 id="firstTitle presentationBackground"> Étudiant </h2>
                    <h2 id="secondTitle presentationBackground"> Développeur </h2>
                </div>

            </div>
            <a className={"bubble"} href="#work"></a>
            {/*ANIMATION D ECRITURE*/}
            {/*MAKE YOUR DREAM POSSIBLE*/}
            {/*PHOTO ENCADR2E NEOMORPHISM !!*/}

        </section>
    );
}

export default Presentation;