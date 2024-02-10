import "./panel.css";
function Panel (props){
    let state = "closed";
    return (
        <div id="panel" className={state}>
            <div className="container">
                <a href="#work">Travaux</a>
                <a href="#experience">Experience</a>
                <a href="#contactForm">Contact</a>
                <a href="https://github.com/Elyan-Gruau/portfolio">Curiculum</a>
            </div>
        </div>
    );
}
export default Panel