import styles from './NavBar.module.scss';
import { Glass } from '../reusable/glass/Glass';
import { MenuButton } from './menu-button/MenuButton';
import { FloatingBubble } from '../style/FloatingBubble/FloatingBubble';

export interface Navbar {
  isMenuOpened: boolean;
  onMenuClicked: () => void;
}
export const Navbar = ({ isMenuOpened, onMenuClicked }: Navbar) => {
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

  const handlePanel = () => {};

  if (document.readyState === 'complete') {
    onPageLoad();
  } else {
    window.addEventListener('load', onPageLoad);
    // Remove the event listener when component unmounts
    //return () => window.removeEventListener('load', onPageLoad);
  }

  return (
    <nav id="nav" className={styles.nav}>
      {/*<FloatingBubble*/}
      {/*  relative={true}*/}
      {/*  top={'4%'}*/}
      {/*  left={'10%'}*/}
      {/*  scale={'150%'}*/}
      {/*  gradient={['rgb(255 73 73)', 'rgb(255 161 0)']}*/}
      {/*  className={styles.bubble}*/}
      {/*/>*/}
      {/*<div id="scrollProgress"></div>*/}
      <div className={styles.contactContainer}>
        <div className={styles.clickableLogo}>
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
        <MenuButton onClick={onMenuClicked} isClosed={isMenuOpened} />
      </div>
    </nav>
  );
};
