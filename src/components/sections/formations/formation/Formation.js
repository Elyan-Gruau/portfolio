import "./formation.css";
function Formation(props){

    const Mention = () => {
        if (props.mention){
            return <p className="mention">{props.mention}</p>
        }
    }

    return(
        <div className="formation movingBackground ">
            <div className="glass">
                <h2 className="title">{props.title}</h2>
                <h2 className="subtitle">{props.subtitle}</h2>
                <h3 className="year">{props.year}</h3>
                <Mention/>
                <p className="description">{props.desc}</p>
                <a className="location" href={"https://www.google.fr/maps/place/Lyc%C3%A9e+de+Lorgues/@43.4930643,6.3536799,718m/data=!3m1!1e3!4m6!3m5!1s0x12c95251cdef22e9:0xb1d5a81296297a43!8m2!3d43.4927933!4d6.3556136!16s%2Fg%2F11bby7kns2?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D"}>
                    {props.location}

                </a>
            </div>
        </div>
    );
}
export default Formation;