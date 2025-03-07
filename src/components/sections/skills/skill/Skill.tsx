import styles from './Skill.module.scss';

export interface SkillProps {
  name: string;
  value: number;
}

export const Skill = ({name,value}:SkillProps) => {
  const barStyle = {
    color: '#fff',
    width: value + '%',
  };

  return (
    <div className={styles.skill}>
      <div className={styles.skillName}>
        <p>{name}</p>
      </div>
      <div className={`${styles.skillBarContainer} ${styles.tooltip}`}>
        <span className={styles.tooltiptext}>{value}/100</span>
        <div className={styles.skillBarGlass}>
          <div className={styles.skillBarValue} style={barStyle}></div>
        </div>
      </div>
    </div>
  );
};
