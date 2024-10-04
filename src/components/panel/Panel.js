import "./panel.css";
import ToggleSwitch from "../input/toggleSwitch/ToggleSwitch";
function Panel (props){
    let state = "closed";

    const changeColorMode = () =>{
        const htmlElement = document.getElementsByTagName("html")[0];
        const classList = htmlElement.classList;
        if(classList.contains("lightMode")){
            htmlElement.classList.remove("lightMode");
        }else{
            htmlElement.classList.add("lightMode");
        }
    }


    return (
        <div id="panel" className={state}>
            <div className="container">
                <a className="menuButton"
                   href="#work">
                    TRAVAUX
                </a>
                <a className="menuButton"
                   href="#technology">
                    TECHNOLOGIES
                </a>
                <a className="menuButton"
                   href="#experience">
                    EXPÉRIENCE
                </a>
                <a className="menuButton"
                   href="#contactForm">
                    CONTACT
                </a>
                <a className="menuButton"
                   href="/portfolio/docs/GRUAU_Elyan_CV.pdf"
                   target="_blank"
                   rel="noreferrer">
                    Curiculum
                </a>
            </div>
            <div className="panelFooter">
                <div className="settingsContainer">
                    {/*<ToggleSwitch*/}
                    {/*    name="Animations"*/}
                    {/*    disabled={true}*/}
                    {/*    onClick={changeColorMode}*/}
                    {/*/>*/}
                    {/*<ToggleSwitch*/}
                    {/*    name="Mode clair"*/}
                    {/*    onClick={changeColorMode}*/}
                    {/*    disabled={false}*/}
                    {/*    id="lightMode"*/}
                    {/*/>*/}
                </div>
                <div className="contactContainer">
                    <a
                        className="phone"
                        href="tel:+33650085321">
                        06 50 08 53 21
                    </a>
                    <a
                        className="mail"
                        href="mailto:elyangruau.pro@gmail.com?subject=Entretient">
                        elyangruau.pro@gmail.com
                    </a>
                </div>
            </div>
        </div>
    );
}

function hello(){
    console.log("hello");
}
export default Panel