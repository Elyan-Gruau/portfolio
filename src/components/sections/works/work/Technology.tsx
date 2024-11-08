import "./workTechnology.css";

export interface TechnologyProps {
    title : string;
}
export const Technology = ({title}:TechnologyProps) =>{
    //const className = "workTechnology wt_"+props.title.replace(" ","_").toLowerCase();
    const className = "workTechnology";
    return (
      <p  className={className} >
          {title}
      </p>
    );
}
