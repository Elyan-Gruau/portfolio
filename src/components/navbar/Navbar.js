import panel from "../panel/Panel";
import "./navBar.css";
function Navbar () {
    let navElement;
    let scrollProgressElement;
    let limit = Math.max( document.body.scrollHeight, document.body.offsetHeight,
        document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight )-1208;
    const onPageLoad = () => {
        //document.documentElement.scrollTop || document.body.scrollTop;
        window.addEventListener('scroll',onScroll);
        navElement = document.getElementById("nav");
        scrollProgressElement = document.getElementById("scrollProgress");
    }

    const handlePanel = (e) =>{
        let panelElement = document.getElementById("panel");
        let classlist = panelElement.classList;
        let target =  document.getElementById("menuButton");
        let targetClassList = target.classList;

        if (classlist.contains("open")){
            classlist.replace("open","closed");
            targetClassList.replace("open","closed");
        }else if (classlist.contains("closed")){
            classlist.replace("closed","open");
            targetClassList.replace("closed","open");
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


        scrollProgressElement.style.width = scroll*100/limit +"%";

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
                <div id="scrollProgress"  >></div>
                <div className="contactContainer">
                    <div className="clickableLogo">
                        <a href="https://www.linkedin.com/in/elyan-gruau/"  target="_blank">
                            <img src="/img/linkedin.png" alt="linkedin"/>
                        </a>
                    </div>
                </div>
                <div className="titleContainer">
                    <h1>Elyan GRUAU</h1>
                </div>
                <div className="menuContainer">
                    <button id="menuButton" className="menu closed" onClick={handlePanel}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
        </nav>
    );
}

export default Navbar;