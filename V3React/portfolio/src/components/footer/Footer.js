import "./footer.css";
function Footer(){
    return (
        <footer id="contact">
            <div className="lookLikeButton">
                <a href="https://www.paypal.com/cgi-bin/webscr?">Mail</a>
                <a href="https://www.linkedin.com/in/elyan-gruau-a62397243/"  target="_blank">Linkedin</a>
                <a href="https://github.com/Elyan-Gruau"  target="_blank">Github</a>
                <a href=" https://discordapp.com/users/484843311849537536" target="_blank">Discord</a>
            </div>
            <span className="author">
                Développé par Elyan GRUAU - Tous droits réservés © - 2023
            </span>
        </footer>
    );
}
export default Footer;