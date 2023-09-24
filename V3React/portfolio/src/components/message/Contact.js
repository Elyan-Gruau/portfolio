import './message.css';
function Contact(){
    return (
        <div id="contactForm">
            <h2>Contact</h2>
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="test@gmail.com"/>

                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Rencontrons-nous !"/>
                <div className="buttonContainer">
                    <button className="btnSender">Envoyer</button>
                </div>
            </form>
        </div>
    );
}
export default Contact;