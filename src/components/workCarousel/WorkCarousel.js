import './workCarousel.css'
import {useState} from "react";
import Work from "../sections/works/work/Work";
import CarouselButton from "./CarouselButton";
import worksData from "./WorksData";
import work from "../sections/works/work/Work";
import {FloatingBubble} from "../responsive/FloatingBubble";

export default function WorkCarousel(props){
    const [current, setCurrent] = useState(0);

    const setCard = (index) => {
        setCurrent(index)
    }


    let cards = []
    let carouselButtons = []

    for (var i = 0; i < worksData.length ; i++) {
        const workItem = worksData[i];
        cards.push( <Work
            title={workItem.title}
            date={workItem.date}
            description={workItem.description}
            person_count={workItem.person_count}
            state={workItem.state}
            technolist={workItem.technolist}
        />)

        carouselButtons.push(  <CarouselButton
            index={i}
            action={setCard}
            active={current === i} />)
    }

    console.log("mipmop")


    return (
        <div className="workCarousel"
             id={"work"}
             style={
            // {backgroundImage: "url(\"/portfolio/img/projects/"+worksData[current].title+".png\")"}
            //      {backgroundImage: "linear-gradient("+worksData[current].gradientColors[0]+","+worksData[current].gradientColors[1]+")"}
                 {backgroundColor : worksData[current].gradientColors[0]}
         }>
            <div className="blurContainer">
                <div className="workCardContainer">
                    {cards[current]}
                    <FloatingBubble
                        relative={true}
                        top={worksData[current].bubbles[0].top}
                        left={worksData[current].bubbles[0].left}
                        scale={worksData[current].bubbles[0].scale}
                        gradient={worksData[current].bubbles[0].colors}
                        animationDelay={-1}/>
                    <FloatingBubble
                        relative={true}
                        top={worksData[current].bubbles[1].top}
                        left={worksData[current].bubbles[1].left}
                        scale={worksData[current].bubbles[1].scale}
                        gradient={worksData[current].bubbles[1].colors}
                        animationDelay={-2.5}/>
                </div>
                <div className="carouselIndexContainer">
                    {carouselButtons}
                </div>
            </div>
        </div>
    );
}