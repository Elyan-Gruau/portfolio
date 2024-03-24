export function FloatingBubble(props){
    return (
        <div
            className="floatingBubble"
            style={{
                top:props.top+"px",
                left:props.left+"px",
                backgroundImage: 'linear-gradient('+props.deg+'deg, '+props.gradient[0]+',' + props.gradient[1] +' )',
                scale:props.scale+"%",
                animationDelay : props.animationDelay+"s"
            }
            }>
        </div>
    );
}