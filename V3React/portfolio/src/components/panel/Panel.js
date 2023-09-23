import "./panel.css";
function Panel (props){
    let state = "closed";
    return (
        <div id="panel" className={state}>
            <div className="container">
                <a>Travaux</a>
                <a>Experience</a>
                <a>Contact</a>
                <a>Curiculum</a>
            </div>
        </div>
    );
}
export default Panel