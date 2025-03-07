import styles from "./Search.module.scss";
export const Search = () => {
  return (
    //   faire en sorte que dans le placeholder, le nom des projets defilent.
    <div className={styles.searchBar}>
      <input id="searchWorkInput" placeholder="A suivre ... :) " type="text" />
      <button id="searchWorkButton"></button>
    </div>
  );
};
