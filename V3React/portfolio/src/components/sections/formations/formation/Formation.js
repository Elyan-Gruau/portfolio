function Formation(props){
    return(
        <div className="storyCard glassMorphism">
            <h2>{props.title}</h2>
            <h3>{props.year}</h3>
            <p>{props.mention}</p>
            <p>{props.desc}</p>
            <p className="location">
                {props.location}
            </p>
        </div>
    );
}
export default Formation;