import './App.css';
import './style/generalStyle.css';
import './style/navBar.css';
import './style/presentation.css';

import './style/footer.css';
import './style/scrollBar.css';
import './style/colors.css';


import Presentation from "./components/sections/Presentation";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Works from "./components/sections/works/Works";
import Skills from "./components/sections/skills/Skills";
import Formations from "./components/sections/formations/Formations";
import Contact from "./components/sections/Contact";
import Spacer from "./components/Spacer";
import Divider from "./components/Divider";
import Experiences from "./components/sections/experiences/Experiences";

function App() {
  return (
    <div className="App">
      <head>
        <meta charSet="UTF-8"/>
        <title> Elyan GRUAU | Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
          <script src="js/inverted-scroll.js"></script>
          <script defer="defer" src="js/typing.js"></script>
      </head>
      <header >
        <Navbar/>
      </header>
      <main>
          <Spacer/>
          <Presentation/>

          <Formations/>
          <Spacer/>
          <Divider/>

          <Skills/>
          <Spacer/>


          <Divider/>
          <Experiences/>
          <Spacer/>

          <Divider/>
          <Works/>
          <Spacer/>
          <Divider/>

          <Contact/>
          <Spacer/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
