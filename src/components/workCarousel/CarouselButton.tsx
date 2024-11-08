import {useState} from "react";


export interface CarouselButton {
    index:number;
    action:(number:number)=>void;
    active:boolean;
}
export const CarouselButton = ({index,action,active}:CarouselButton) =>{
    const [isSelected, setIsSelected ] = useState(active);

    const handleClick = (e) => {
        setIsSelected(!isSelected);
        action(index)
    }

    return (
        <div className={"carouselButton "+ (active ? "selected" : "")}
            onClick={handleClick}
            >
        </div>
        );
}