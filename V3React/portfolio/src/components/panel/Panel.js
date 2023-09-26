import "./panel.css";
function Panel (props){
    let state = "closed";
    return (
        <div id="panel" className={state}>
            <div className="container">
                <a href="#work">Travaux</a>
                <a href="#experience">Experience</a>
                <a href="#contact">Contact</a>
                <a>Curiculum</a>
            </div>
        </div>
    );
}
export default Panel