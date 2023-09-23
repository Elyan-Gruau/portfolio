import './App.css';
import './style/generalStyle.css';
import './style/scrollBar.css';
import './style/colors.css';


import Presentation from "./components/sections/Presentation";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Works from "./components/sections/works/Works";
import Skills from "./components/sections/skills/Skills";
import Formations from "./components/sections/formations/Formations";
import Contact from "./components/sections/Contact";
import Spacer from "./components/Spacer";
import Divider from "./components/Divider";
import Experiences from "./components/sections/experiences/Experiences";
import Panel from "./components/panel/Panel";

function App() {
  return (
    <div className="App">
      <head>
          <style>
              @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,700;0,900;1,400;1,900&family=Roboto:ital@1&display=swap');
          </style>
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
        <Panel/>
        <Presentation/>
      <main>
          <Divider/>
          <Works/>
          <Spacer/>
          <Divider/>

          <Formations/>
          <Spacer/>
          <Divider/>

          <Skills/>
          <Spacer/>


          <Divider/>
          <Experiences/>
          <Spacer/>



          <Contact/>
          <Spacer/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
