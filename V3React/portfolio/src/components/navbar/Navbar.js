import panel from "../panel/Panel";
import "./navBar.css";
function Navbar () {
    let navElement;
    const onPageLoad = () => {
        //document.documentElement.scrollTop || document.body.scrollTop;
        window.addEventListener('scroll',onScroll);
        navElement = document.getElementById("nav");
    }

    const handlePanel = () =>{
        console.log("panel handling")
        let panelElement = document.getElementById("panel");
        let classlist = panelElement.classList;
        if (classlist.contains("open")){
            classlist.replace("open","closed");
        }else if (classlist.contains("closed")){
            classlist.replace("closed","open");
        }
    }
    const onScroll = () => {
        let scroll = document.documentElement.scrollTop;
        let classList = navElement.classList;
        if (scroll ===0 ){
            navElement.classList.remove("withBoxShadow");
        }else if (!classList.contains("withBoxShadow")){
            navElement.classList.add("withBoxShadow");
        }
    }

    if (document.readyState === 'complete') {
        onPageLoad();
    } else {
        window.addEventListener('load', onPageLoad);
        // Remove the event listener when component unmounts
        //return () => window.removeEventListener('load', onPageLoad);
    }

    return (
            <nav id="nav">
                <div className="titleContainer">
                    <h1>Elyan GRUAU</h1>
                </div>
                <div className="sectionJumpingContainer">
                {/*    <a href="#presentation">Présentation</a>*/}
                {/*    <a href="#work">Travaux</a>*/}
                {/*<a href="#contact">Contact</a>*/}
                {/*<a href="#curiculum">Curiculum</a>*/}
            </div>
            <div className="contactContainer">
                {/*<div className="clickableLogo">*/}
                {/*    <a href="https://www.linkedin.com/in/elyan-gruau/"  target="_blank">*/}
                {/*        <img src="../../../public/img/linkedin.png" alt="linkedin"/>*/}
                {/*    </a>*/}
                {/*</div>*/}
                {/*<div className="clickableLogo">*/}
                {/*    <a href="https://github.com/Elyan-Gruau" target="_blank">*/}
                {/*        <img src="../../../public/img/github.png" alt="github"/>*/}
                {/*    </a>*/}
                {/*</div>*/}
                {/*<div className="clickableLogo">*/}
                {/*    <a href="https://www.linkedin.com/in/elyan-gruau/"  target="_blank">*/}
                {/*        <img src="../../../public/img/mail.png" alt="mail"/>*/}
                {/*    </a>*/}
                {/*</div>*/}
            </div>
                <button id="menuButton" className="menu" onClick={handlePanel}>M
                </button>
        </nav>
    );
}

export default Navbar;