function Contact(){
    return (
        <section id="contactForm">
            <h2>Contacte</h2>
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="test@gmail.com"/>

                <label htmlFor="message">Message</label>
                <input type="text" id="message" placeholder="Rencontrons-nous !"/>

                <button className="btnSender">Envoyer</button>
            </form>
        </section>
    );
}
export default Contact;