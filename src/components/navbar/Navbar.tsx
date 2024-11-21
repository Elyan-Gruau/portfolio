import styles from './NavBar.module.scss';
import { Glass } from '../reusable/glass/Glass';
export const Navbar = () => {
  let navElement = document.getElementById('panel');
  let bodyElement;

  const onPageLoad = () => {
    //TODO FIND WHY IT IS CALLED 2 TIMES
    navElement = document.getElementById('nav');
    bodyElement = document.getElementsByTagName('body')[0];
    // window.removeEventListener('load', onPageLoad);

    // const targets = panelElement.querySelectorAll(".menuButton");
    // for (let i = 0; i < targets.length;i++){
    //     console.log(targets[i])
    // }
    // console.log("ok")
  };

  const handlePanel = (e) => {
    const panelElement = document.getElementById('panel');
    let classlist = panelElement.classList;
    let target = document.getElementById('menuButton');
    // let targetClassList = target.classList;

    if (classlist.contains('open')) {
      //CLOSING THE PANEL
      panelElement.classList.remove('open');
      target.classList.remove('open');
      // bodyElement.classList.remove("noScroll");
    } else {
      //OPENING THE PANEL
      target.classList.add('open');
      panelElement.classList.add('open');
      // bodyElement.classList.add("noScroll");
    }
  };

  if (document.readyState === 'complete') {
    onPageLoad();
  } else {
    window.addEventListener('load', onPageLoad);
    // Remove the event listener when component unmounts
    //return () => window.removeEventListener('load', onPageLoad);
  }

  return (
    <nav id="nav">
      <Glass>
        <div id="scrollProgress"></div>
        <div className={styles.contactContainer}>
          <div className="clickableLogo">
            <a
              href="https://www.linkedin.com/in/elyan-gruau/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/portfolio/img/icons/linkedin.png" alt="linkedin" />
            </a>
          </div>
        </div>
        <div className={styles.titleContainer}>
          <h1>Elyan GRUAU</h1>
        </div>
        <div className={styles.menuContainer}>
          <button
            id="menuButton"
            className={`${styles.menu} ${styles.closed}`}
            onClick={handlePanel}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            menu
          </button>
        </div>
      </Glass>
    </nav>
  );
};
