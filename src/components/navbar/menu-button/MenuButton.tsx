import styles from './MenuButton.module.scss';

export interface MenuButtonProps {
  onClick: () => void;
  isClosed: boolean;
}
export const MenuButton = ({ onClick, isClosed }: MenuButtonProps) => {
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
    onClick();
  };

  return (
    <button
      className={`${styles.menuButton} ${isClosed ? styles.open : ''}`}
      onClick={onClick}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      menu
    </button>
  );
};
