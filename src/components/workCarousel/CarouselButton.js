import {useState} from "react";

export default function CarouselButton(props){
    const [isSelected, setIsSelected ] = useState(props.active);

    const handleClick = (e) => {
        setIsSelected(!isSelected);
        props.action(props.index)
    }

    return (
        <div className={"carouselButton "+ (props.active ? "selected" : "")}
            onClick={handleClick}
            >
        </div>
        );
}