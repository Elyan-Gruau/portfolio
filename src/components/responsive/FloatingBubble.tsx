
export interface FloatingBubbleProps{
    top:number;
    left:number;
    deg:number;
    gradient:string;
    scale:string;
    animationDelay:number;
    relative:boolean;
}

export const FloatingBubble = (props) =>{
    const top = !props.top ? "500px" : props.top;
    const left = !props.left ? "500px" : props.left;
    const deg = !props.deg ? 160 : props.deg;
    const gradient = !props.gradient ? ["#ffffff", "#000000"] : props.gradient;
    const scale = !props.scale ? "100%" : props.scale;
    const animationDelay = !props.animationDelay ? "-8s" : props.animationDelay;
    const isRelative = !props.relative ? false : props.relative;

    return (

        <div
            className={"floatingBubble "+(isRelative? "relative" : "")}
            style={{
                top:top,
                left:left,
                backgroundImage: 'linear-gradient('+deg+'deg, '+gradient[0]+',' + gradient[1] +' )',
                scale:scale,
                animationDelay : animationDelay+"s",
            }
            }>
        </div>
    );
}