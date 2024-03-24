import './message.css';
import {FloatingBubble} from "../responsive/FloatingBubble";
function Contact(){

    // top: 640.525px;
    // left: 289.824px;
    // background-image: linear-gradient(189deg,);
    // scale: 2.49309;
    // animation-delay: -0.164447s;
    return (
        <div className="contactFormContainer">
            <div id="contactForm" className="movingBackground">
                <FloatingBubble
                    relative={true}
                    top={"4%"}
                    left={"-6%"}
                    scale={"150%"}
                    gradient={["rgb(255 73 73)", "rgb(255 161 0)"]}
                />
                <FloatingBubble
                    relative={true}
                    top={"76%"}
                    left={"75%"}
                    scale={"130%"}
                    deg={"69"}
                    animationDelay={3}
                    gradient={[ "rgb(178 43 149)", "rgb(255, 183, 45)"]}
                />
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
        </div>
    );
}
export default Contact;