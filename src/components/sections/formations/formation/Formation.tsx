import styles from './Formation.module.scss';
import { Glass } from '../../../reusable/glass/Glass';

export interface FormationProps {
  title: string;
  subtitle: string;
  mention: string;
  desc: string;
  year: number;
  location: string;
}
export const Formation = ({
  title,
  subtitle,
  mention,
  desc,
  year,
  location,
}: FormationProps) => {
  const Mention = () => {
    if (mention) {
      return <p className={styles.mention}>{mention}</p>;
    }
  };

  return (
    <div className={`${styles.formation} movingBackground`}>
      <Glass>
        <h2 className={styles.title}>{title}</h2>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <h3 className={styles.year}>{year}</h3>
        <Mention />
        <p className={styles.description}>{desc}</p>
        <a
          className={styles.location}
          href={
            'https://www.google.fr/maps/place/Lyc%C3%A9e+de+Lorgues/@43.4930643,6.3536799,718m/data=!3m1!1e3!4m6!3m5!1s0x12c95251cdef22e9:0xb1d5a81296297a43!8m2!3d43.4927933!4d6.3556136!16s%2Fg%2F11bby7kns2?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D'
          }
        >
          {location}
        </a>
      </Glass>
    </div>
  );
};
