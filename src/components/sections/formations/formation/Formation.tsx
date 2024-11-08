import "./formation.css";

export interface FormationProps{
    title:string;
    subtitle:string;
    mention :string;
    desc:string;
    year:number;
    location:string;

}
export const Formation = ({title,subtitle,mention,desc,year,location}:FormationProps) =>{

    const Mention = () => {
        if (mention){
            return <p className="mention">{mention}</p>
        }
    }

    return(
        <div className="formation movingBackground ">
            <div className="glass">
                <h2 className="title">{title}</h2>
                <h2 className="subtitle">{subtitle}</h2>
                <h3 className="year">{year}</h3>
                <Mention/>
                <p className="description">{desc}</p>
                <a className="location" href={"https://www.google.fr/maps/place/Lyc%C3%A9e+de+Lorgues/@43.4930643,6.3536799,718m/data=!3m1!1e3!4m6!3m5!1s0x12c95251cdef22e9:0xb1d5a81296297a43!8m2!3d43.4927933!4d6.3556136!16s%2Fg%2F11bby7kns2?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D"}>
                    {location}

                </a>
            </div>
        </div>
    );
}