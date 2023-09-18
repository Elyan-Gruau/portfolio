import "./workTechnology.css";
function Technology(props){
    const className = "workTechnology wt_"+props.title.replace(" ","_").toLowerCase();
    return (
      <p className={className} >
          {props.title}
      </p>
    );
}
export default Technology;