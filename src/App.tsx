import './App.css';
import './style/generalStyle.css';
import './style/scrollBar.css';
import './style/colors.css';
import './style/glass.module.scss';
import './style/animation.css';
import './style/tooltip.css';

import { Presentation } from './components/sections/presentation/Presentation.tsx';

import { Works } from './components/sections/works/Works.tsx';
import { Skills } from './components/sections/skills/Skills.tsx';
import { Formations } from './components/sections/formations/Formations.tsx';
import { Contact } from './components/message/Contact.tsx';
import { Spacer } from '@reusable/spacer/Spacer.tsx';
import { Divider } from '@reusable/divider/Divider.tsx';
import { Experiences } from './components/sections/experiences/Experiences.tsx';
import { Panel } from './components/panel/Panel.tsx';
import { ResponsiveStyle } from './components/responsive/responsive-style/ResponsiveStyle.tsx';

import { WorkCarousel } from './components/workCarousel/WorkCarousel.tsx';
import { Footer } from './components/footer/Footer.tsx';
import { Navbar } from './components/navbar/Navbar.tsx';
import { useState } from 'react';

export const App = () => {
  //*** FADE IN ***/
  let elementsWithAnimation;



  const onPageLoad = () => {
    window.addEventListener('scroll', onScroll);
    elementsWithAnimation = document.getElementsByClassName('animateOnDisplay');
    // adaptThemeToClient();
  };

  const adaptThemeToClient = () => {
    if (!window.matchMedia('(prefers-color-scheme: dark)').matches) {
      const htmlElement = document.getElementsByTagName('html')[0];
      htmlElement.classList.add('lightMode');
      const toggleSwitch = document.querySelector<HTMLInputElement>("#toggleSwitch_lightMode");
      if(toggleSwitch){
        toggleSwitch.checked = true;
      }
      console.log('lightMode detected');
    }
  };

  const onScroll = () => {
    // for (let i = 0; i < elementsWithAnimation.length; i++) {
    //     let element = elementsWithAnimation[i];
    //
    //
    //     if (!isElementInViewport(element)) {
    //         if (element.classList.contains("display")) {
    //             element.classList.remove("display");
    //             element.classList.add("noDisplay");
    //         }
    //     } else {
    //         element.classList.remove("noDisplay");
    //         element.classList.add("display");
    //     }
    // }
  };

  if (document.readyState === 'complete') {
    onPageLoad();
  } else {
    window.addEventListener('load', onPageLoad);
  }WorkCarousel

  // /**** 3D EFFECT ****/
  // const card = document.querySelector(".toto");
  // const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
  // const THRESHOLD = 15;
  //
  // /*
  //  * Read the blog post here:
  //  * https://letsbuildui.dev/articles/a-3d-hover-effect-using-css-transforms
  //  */
  // function handleHover(e) {
  //     const { clientX, clientY, currentTarget } = e;
  //     const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;
  //
  //     const horizontal = (clientX - offsetLeft) / clientWidth;
  //     const vertical = (clientY - offsetTop) / clientHeight;
  //     const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
  //     const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);
  //
  //     card.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
  // }
  //
  // function resetStyles(e) {
  //     card.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
  // }
  //
  // if (!motionMatchMedia.matches && card != null) {
  //     // card.addEventListener("mousemove", handleHover);
  //     // card.addEventListener("mouseleave", resetStyles);
  // }

  const [isPanelOpen, setIsPanelOpen] = useState<boolean>(false);

  const handleMenuClicked = () => {
    setIsPanelOpen((prev) => !prev);
  };

  return (
    <div className="App">
      <header>
        <Navbar isMenuOpened={isPanelOpen} onMenuClicked={handleMenuClicked} />
      </header>
      <Panel isOpen={isPanelOpen} />
      <Presentation />
      <main>
        {/*<Divider/>*/}
        {/*<Works/>*/}
        <WorkCarousel />
        <Spacer />
        <Divider />

        {/*<Formations />*/}
        {/*<Spacer />*/}
        {/*<Divider />*/}

        <Skills />
        <Spacer />

        <Divider />
        <Experiences />

        <Contact />
        <Footer />
      </main>

      <ResponsiveStyle />
    </div>
  );
};
