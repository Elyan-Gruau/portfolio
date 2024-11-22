import styles from './Skill.module.scss';
export const Skill = (props) => {
  //const name = props.name.replace(" ","_").replace("(","").replace(")","").toLowerCase();
  //const bar = renderBar("--CleanBlack");
  // const name= "allSkill";
  const barStyle = {
    color: '#fff',
    width: props.value + '%',
  };
  // const barStyleHover = {
  //
  // }

  return (
    <div className={styles.skill}>
      <div className={styles.skillName}>
        <p>{props.name}</p>
      </div>
      <div className={`${styles.skillBarContainer} ${styles.tooltip}`}>
        <span className={styles.tooltiptext}>{props.value}/100</span>
        <div className={styles.skillBarGlass}>
          <div className={styles.skillBarValue} style={barStyle}></div>
        </div>
      </div>
    </div>
  );
};
