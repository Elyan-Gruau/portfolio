import './bubbleMaker.css';
export default function BubbleMaker(props){
    const MAX_DISTANCE = 500;
    const BUBBLE_QTY = 8;
    const COLORS = [
        "#4e4ec9",
        "#e8c4b0",
        "#c93b08",
        "#6b0707",
        "#076b48",
        "#10d28f",
    ]

    const GRADIENTS= [
        ["#4e4ec9", "rgb(255 19 59)"],
        ["#ad1c0a","#854ec9"],
        ["rgb(255 38 78)","#c98c4e"],
        ["rgb(77 5 253)","rgb(238 160 15)"],
        ["#4bffa5","#4ec967"],
        ["#4bffa5","#524ec9"],
        ["#641277","#524ec9"],
        ["rgb(255 190 0)","rgb(255 57 0)"],
    ]
    const move = (e) => {

        const rootElement = document.getElementById("root").getBoundingClientRect();

        const minX = 200;
        const maxX = rootElement.width - 200;
        const minY = 100;
        const maxY = window.innerHeight - 1000;

        const bubbles = document.getElementsByClassName("floatingBubble");
        for (let i = 0; i < bubbles.length; i++) {
            const bubble = bubbles[i];
            const offsetX = getRandomArbitrary(-MAX_DISTANCE, MAX_DISTANCE);
            const offsetY = getRandomArbitrary(-MAX_DISTANCE, MAX_DISTANCE);
            let x = bubble.getBoundingClientRect().top + offsetY;
            let y = bubble.getBoundingClientRect().left + offsetX;
            if (x < minX) x = minX;
            if (y < minY) y = minY;
            // console.log("ROOT ELEMENT HEIGHT "+window.innerHeight)
            if (x > maxX) x = maxX;
            if (y > maxY) y = maxY;
            console.log(" x: " + x + ", y: " + y);

            bubble.style.top = y +"px";
            bubble.style.left = x +"px";
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
                    scale:getRandomArbitrary(100,300)+"%",
                    animationDelay : getRandomArbitrary(-8,0)+"s"
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

    // document.addEventListener("click",move);

    return (
      bubbles
    );
}