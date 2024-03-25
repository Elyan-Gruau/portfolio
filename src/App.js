import './App.css';
import './style/generalStyle.css';
import './style/scrollBar.css';
import './style/colors.css';
import './style/glass.css';
import './style/animation.css';
import './style/tooltip.css';


import Presentation from "./components/sections/presentation/Presentation";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Works from "./components/sections/works/Works";
import Skills from "./components/sections/skills/Skills";
import Formations from "./components/sections/formations/Formations";
import Contact from "./components/message/Contact";
import Spacer from "./components/Spacer";
import Divider from "./components/Divider";
import Experiences from "./components/sections/experiences/Experiences";
import Panel from "./components/panel/Panel";
import ResponsiveStyle from "./components/responsive/ResponsiveStyle";
import BubbleMaker from "./components/responsive/BubbleMaker";
import WorkCarousel from "./components/workCarousel/WorkCarousel";

function App() {

    //*** FADE IN ***/
    let elementsWithAnimation;

    function isElementInViewport(element) {
        var rect = element.getBoundingClientRect();

        // Vérifie si l'élément est entièrement visible à l'écran
        return (
            rect.top >= -600 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    const onPageLoad = () => {
        window.addEventListener('scroll', onScroll);
        elementsWithAnimation = document.getElementsByClassName("animateOnDisplay");
        // adaptThemeToClient();
    }

    const adaptThemeToClient = () => {
        if (!window.matchMedia('(prefers-color-scheme: dark)').matches){
            const htmlElement = document.getElementsByTagName("html")[0];
            htmlElement.classList.add("lightMode");
            const toggleSwitch = document.getElementById("toggleSwitch_lightMode");
            toggleSwitch.checked = true;
            console.log("lightMode detected")
        }
    }

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
    }

    if (document.readyState === 'complete') {
        onPageLoad();
    } else {
        window.addEventListener('load', onPageLoad);
    }

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



    return (
    <div className="App">
      <header >
        <Navbar/>
      </header>
        <Panel/>
        <Presentation/>
      <main>
          <Divider/>
          {/*<Works/>*/}
          <WorkCarousel/>
          <Spacer/>
          <Divider/>

          <Formations/>
          <Spacer/>
          <Divider/>

          {/*<BubbleMaker/>*/}
          <Skills/>
          <Spacer/>


          <Divider/>
          <Experiences/>
          <Spacer/>



          <Contact/>
          <Footer/>
      </main>

        <ResponsiveStyle/>
    </div>
  );
}

export default App;
