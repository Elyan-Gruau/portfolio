function Navbar () {
    return (
            <nav>
                <div class="titleContainer">
                    <h1>Elyan GRUAU</h1>
                </div>
                <div class="sectionJumpingContainer">
                    <a href="#presentation">Présentation</a>
                    <a href="#work">Travaux</a>
                <a href="#contact">Contacte</a>
                <a href="#curiculum">Curiculum</a>
            </div>
            <div class="contactContainer">
                <div class="clickableLogo">
                    <a href="https://www.linkedin.com/in/elyan-gruau/"  target="_blank">
                        <img src="../../public/img/linkedin.png" alt="linkedin"/>
                    </a>
                </div>
                <div class="clickableLogo">
                    <a href="https://github.com/Elyan-Gruau" target="_blank">
                        <img src="../../public/img/github.png" alt="github"/>
                    </a>
                </div>
                <div class="clickableLogo">
                    <a href="https://www.linkedin.com/in/elyan-gruau/"  target="_blank">
                        <img src="../../public/img/mail.png" alt="mail"/>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;