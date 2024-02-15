import './message.css';
function Contact(){
    return (
        <div id="contactForm" className="movingBackground">
            <div className="glass">
                <h2>Contact</h2>
                <form>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="best@compagny.com"/>

                    <label htmlFor="message">Message</label>
                    <textarea id="message" placeholder="Ce formulaire pourra bientôt vous satisfaire."/>
                    {/*Rencontrons-nous !*/}
                    <div className="buttonContainer">
                        <button className="btnSender">Envoyer</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Contact;