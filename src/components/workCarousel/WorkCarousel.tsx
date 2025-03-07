import styles from './WorkCarousel.module.scss';
import { useState } from 'react';
import { Work } from '../sections/works/work/Work.tsx';
import { CarouselButton } from './CarouselButton.tsx';
import worksData from './WorksData.ts';

export interface WorkCarouselProps {}
export const WorkCarousel = ({}: WorkCarouselProps) => {
  const [current, setCurrent] = useState(0);

  const setCard = (index:number) => {
    setCurrent(index);
  };

  let cards = [];
  let carouselButtons = [];

  for (let i = 0; i < worksData.length; i++) {
    const workItem = worksData[i];
    cards.push(
      <Work
        key={'work_' + i + workItem.title}
        title={workItem.title}
        date={workItem.date}
        description={workItem.description}
        person_count={workItem.person_count}
        displayImageInRow={workItem.displayImageInRow}
        state={workItem.state}
        technolist={workItem.technolist}
        bgImgName={workItem.bgImgName}
        bgGradient={workItem.bgGradient}
              />
    );

    carouselButtons.push(
      <CarouselButton index={i} action={setCard} active={current === i} />
    );
  }

  return (
    <>
      <section
        className={styles.workCarousel}
        // style={
        // {backgroundImage: "url(\"/portfolio/img/projects/"+worksData[current].title+".png\")"}
        //      {backgroundImage: "linear-gradient("+worksData[current].gradientColors[0]+","+worksData[current].gradientColors[1]+")"}
        //      {backgroundColor : worksData[current].gradientColors[0]}

        id={'work'}
      >
        {/*<h2>Travaux</h2>*/}
        <div className={styles.workContainerGrid}>
          {cards}
          {/*<FloatingBubble*/}
          {/*    relative={true}*/}
          {/*    top={worksData[current].bubbles[0].top}*/}
          {/*    left={worksData[current].bubbles[0].left}*/}
          {/*    scale={worksData[current].bubbles[0].scale}*/}
          {/*    gradient={worksData[current].bubbles[0].colors}*/}
          {/*    animationDelay={-1}/>*/}
          {/*<FloatingBubble*/}
          {/*    relative={true}*/}
          {/*    top={worksData[current].bubbles[1].top}*/}
          {/*    left={worksData[current].bubbles[1].left}*/}
          {/*    scale={worksData[current].bubbles[1].scale}*/}
          {/*    gradient={worksData[current].bubbles[1].colors}*/}
          {/*    animationDelay={-2.5}/>*/}
        </div>
      </section>
      <div className={styles.workContainerFooter}></div>
    </>
  );
};
