import "./footer.css";
function Footer(){
    return (
        <footer id="contact" >
            <div className="glass">
                <div className="lookLikeButton">
                    <a href="mailto:elyangruau.pro@gmail.com?subject=Entretient"
                       target="_blank"
                       rel="noreferrer"
                       className="button_mail">
                    </a>
                    <a href="https://www.linkedin.com/in/elyan-gruau-a62397243/"
                       target="_blank"
                       rel="noreferrer"
                       className="button_linkedin">
                    </a>
                    <a href="https://github.com/Elyan-Gruau"
                       target="_blank"
                       rel="noreferrer"
                       className="button_github">
                    </a>
                    {/*<a href=" https://discordapp.com/users/484843311849537536"*/}
                    {/*   target="_blank"*/}
                    {/*   rel="noreferrer"*/}
                    {/*   className="button_discord">*/}
                    {/*    Discord*/}
                    {/*</a>*/}
                </div>
                <span className="author">
                Développé par Elyan GRUAU - Tous droits réservés © - 2023
            </span>
            </div>
        </footer>
    );
}
export default Footer;