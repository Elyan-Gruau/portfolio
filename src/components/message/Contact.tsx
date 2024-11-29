import styles from './Contact.module.scss';
import { FloatingBubble } from '../style/FloatingBubble/FloatingBubble';
import { Glass } from '../reusable/glass/Glass';
export const Contact = () => {
  // top: 640.525px;
  // left: 289.824px;
  // background-image: linear-gradient(189deg,);
  // scale: 2.49309;
  // animation-delay: -0.164447s;
  return (
    <div className={styles.contactFormContainer}>
      <div
        id="contactForm"
        className={`${styles.contactForm} movingBackground`}
      >
        <FloatingBubble
          relative={true}
          top={'4%'}
          left={'10%'}
          scale={'150%'}
          gradient={['rgb(255 73 73)', 'rgb(255 161 0)']}
        />
        <FloatingBubble
          relative={true}
          top={'78%'}
          left={'91%'}
          scale={'150%'}
          deg={69}
          animationDelay={3}
          gradient={['rgb(178 43 149)', 'rgb(255, 183, 45)']}
        />
        <Glass>
          <h2>Contact</h2>
          <form>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="best@compagny.com"
              pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
              size="30"
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Ce formulaire pourra bientôt vous satisfaire."
            />
            {/*Rencontrons-nous !*/}
            <div className={styles.buttonContainer}>
              <button className={styles.btnSender}>Envoyer</button>
            </div>
          </form>
        </Glass>
      </div>
    </div>
  );
};
