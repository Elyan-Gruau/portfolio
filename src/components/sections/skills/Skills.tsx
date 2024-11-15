import { Skill } from './skill/Skill';
import './Skills.css';
import { FloatingBubble } from '../../style/FloatingBubble/FloatingBubble';

export const Skills = () => {
  return (
    <section className="skills" id={'technology'}>
      <h2>Technologies</h2>
      {/*TODO lors du hover d'une compétence, un bouton tout a droite pop permetant d'afficher les projet métant*/}
      {/*en oeuvre cette techo*/}
      <FloatingBubble
        key={'ConsSkillsBubble8'}
        relative={true}
        top={'37%'}
        left={'4%'}
        scale={'205%'}
        deg={'177'}
        animationDelay={-1.1}
        gradient={['rgb(176 253 218)', 'rgb(255,101,0)']}
      />
      <div className="skillCont glass">
        <div className="leftPart">
          <Skill name="Java" value="85" />
          <Skill name="JavaScript" value="68" />
          <Skill name="HTML" value="75" />
          <Skill name="CSS" value="91" />
          <Skill name="React" value="45" />
          <Skill name="Android (Java)" value="60" />
        </div>
        <div className="rightPart">
          <Skill name="PHP" value="60" />
          <Skill name="SQL" value="70" />
          <Skill name="Python" value="65" />
          <Skill name="JSP" value="55" />
          <Skill name="C" value="50" />
          <Skill name="Git" value="75" />
        </div>
      </div>
    </section>
  );
};
