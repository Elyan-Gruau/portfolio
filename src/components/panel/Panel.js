import "./panel.css";
function Panel (props){
    let state = "closed";
    return (
        <div id="panel" className={state}>
            <div className="container">
                <a href="#work">Travaux</a>
                <a href="#experience">Experience</a>
                <a href="#contactForm">Contact</a>
                <a href="/docs/GRUAU%20Elyan%20CV.pdf" download>Curiculum</a>
            </div>
        </div>
    );
}
export default Panel