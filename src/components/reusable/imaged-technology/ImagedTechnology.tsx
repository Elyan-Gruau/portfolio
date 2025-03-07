import styles from './ImagedTechnology.module.scss';
import { Glass } from '../glass/Glass.tsx';

export interface ImagedTechnologyProps {
  name: string;
}

const ImagedTechnology = ({ name }: ImagedTechnologyProps) => {
  return (
    <div className={styles.container}>
      <Glass className={styles.logo}>
        <img src={`/img/technologies/${name}.png`} alt={name} />
      </Glass>
      <span className={styles.name}>{name}</span>
    </div>
  );
};

export default ImagedTechnology;
