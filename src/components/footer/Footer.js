import "./footer.css";
import {FloatingBubble} from "../responsive/FloatingBubble";
function Footer(){
    return (
        <footer id="contact" >
            <FloatingBubble
                relative={true}
                top={"35%"}
                left={"15%"}
                scale={"155%"}
                deg={"69"}
                animationDelay={-2.5}
                gradient={[ "rgb(255,0,200)", "rgb(0,81,255)"]}
            />
            <div className="glass">
                <div className="lookLikeButton">
                    <a href="mailto:elyangruau.pro@gmail.com?subject=Entretient"
                       target="_blank"
                       rel="noreferrer"
                       className="button_mail">
                        envoyer email
                    </a>
                    <a href="https://www.linkedin.com/in/elyan-gruau-a62397243/"
                       target="_blank"
                       rel="noreferrer"
                       className="button_linkedin">
                        Linkedin
                    </a>
                    <a href="https://github.com/Elyan-Gruau"
                       target="_blank"
                       rel="noreferrer"
                       className="button_github">
                        Github
                    </a>
                    {/*<a href=" https://discordapp.com/users/484843311849537536"*/}
                    {/*   target="_blank"*/}
                    {/*   rel="noreferrer"*/}
                    {/*   className="button_discord">*/}
                    {/*    Discord*/}
                    {/*</a>*/}
                </div>
                <span className="author">
                Développé par Elyan GRUAU - Tous droits réservés © - 2024
            </span>
            </div>
        </footer>
    );
}
export default Footer;