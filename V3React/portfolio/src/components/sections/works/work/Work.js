import "./work.css";
function Work (props){
    return(
        <div className="work">
            <h3>{props.name}</h3>
            <p>work, nombre de personnes, description, liste des techno utilisée ... état (terminé, en cours ...)</p>
        </div>
    );
}
export default Work;