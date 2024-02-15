import "./panel.css";
function Panel (props){
    let state = "closed";
    return (
        <div id="panel" className={state}>
            <div className="container">
                <a className="menuButton"
                   href="#work">
                    Travaux
                </a>
                <a className="menuButton"
                   href="#experience">
                    Experience
                </a>
                <a className="menuButton"
                   href="#contactForm">
                    Contact
                </a>
                <a className="menuButton"
                   href="/public/docs/GRUAU_Elyan_CV.pdf"
                   target="_blank"
                   rel="noreferrer">
                    Curiculum
                </a>
            </div>
        </div>
    );
}
export default Panel