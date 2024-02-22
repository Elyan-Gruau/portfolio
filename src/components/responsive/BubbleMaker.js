import './bubbleMaker.css';
export default function BubbleMaker(props){
    const MAX_DISTANCE = 500;
    const BUBBLE_QTY = 10;
    const COLORS = [
        "#641277",
        "#4e4ec9",
        "#e8c4b0",
        "#c93b08",
        "#6b0707",
        "#076b48",
        "#10d28f",
    ]

    const GRADIENTS= [
        [   "#4e4ec9", "rgb(255 19 59)"],
        [   "#ad1c0a","#854ec9"],
        [   "rgb(255 38 78)","#c98c4e"],
        [   "rgb(77 5 253)","rgb(238 160 15)"],
        [   "#4bffa5","#4ec967"],
        [   "#4bffa5","#524ec9"],
    ]
    const move = (e) => {

        const rootElement = document.getElementById("root").getBoundingClientRect();

        const bubbles = document.getElementsByClassName("floatingBubble");
        for (let i = 0; i < bubbles.length; i++) {
            const bubble = bubbles[i];
            const offsetX = getRandomArbitrary(-MAX_DISTANCE, MAX_DISTANCE);
            const offsetY = getRandomArbitrary(-MAX_DISTANCE, MAX_DISTANCE);
            console.log(bubble.style.positionY);
            let x = bubble.getBoundingClientRect().top + offsetY;
            let y = bubble.getBoundingClientRect().left + offsetX;
            if (x < 0) x = 0;
            if (y < 0) y = 0;
            if (x > rootElement.width) x = rootElement.width -60;
            if (y > window.innerHeight) y = window.innerHeight;

            bubble.style.top = x +"px";
            bubble.style.left = y +"px";
        }
        // e.stopPropagation();
    };

    function createBubble () {
        const rootElement = document.getElementById("root").getBoundingClientRect();
        const gradient = GRADIENTS[Math.floor(getRandomArbitrary(0,GRADIENTS.length))];
        const deg = Math.floor(getRandomArbitrary(0,360));
        // console.log("color :"+color+ " choice :" +choice)
        return (
            <div
                className="floatingBubble"
                style={{
                    top:getRandomArbitrary(0,window.innerHeight)+"px",
                    left:getRandomArbitrary(0,rootElement.width)+"px",
                    backgroundImage: 'linear-gradient('+deg+'deg, '+gradient[0]+',' + gradient[1] +' )',
                    scale:getRandomArbitrary(100,300)+"%"
                }
            }>
            </div>
        );
    }

    const bubbles = [];
    for (let i = 0; i < BUBBLE_QTY;i++){
        bubbles.push(createBubble());
    }

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    document.addEventListener("click",move);

    return (
      bubbles
    );
}