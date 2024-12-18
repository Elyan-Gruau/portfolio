import { Search } from './search/Search';
import { Work } from './work/Work';
import styles from './WorkContainer.module.scss';
import worksData from '../../workCarousel/WorksData';

export const Works = () => {
  const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ' +
    'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ' +
    'ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
    'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  return (
    <section className={styles.s4} id="work">
      <h2>Travaux</h2>
      {/*<Search/>*/}
      {/*CARROUSEL AVEC BORD EN FONDU POUR INQIQUER LE SCROLL*/}
      {/*CARTE ? AFFICHER LE NOMBRE DE PARTICIPANT AVEC UN NOMBRE A CÔTE DUN BONHOME DE PERSONNE*/}
      <div className={styles.workContainer}>
        {worksData.map((data) => (
          <Work work={data} />
        ))}
      </div>
    </section>
  );
};
