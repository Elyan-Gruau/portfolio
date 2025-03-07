import styles from './FloatingBubble.module.scss';
export interface FloatingBubbleProps {
  top?: string;
  left?: string;
  deg?: number;
  gradient: Array<string>;
  scale?: string;
  animationDelay?: number;
  relative?: boolean;
  className?: string;
}

export const FloatingBubble = ({
  top = '500px',
  left = '500px',
  deg = 160,
  gradient = ['#ffffff', '#000000'],
  scale = '100%',
  animationDelay = -8,
  relative = false,
  className,
}: FloatingBubbleProps) => {
  return (
    <div
      className={`${styles.floatingBubble} ${relative ? styles.relative : null} ${className}`}
      style={{
        top: top,
        left: left,
        backgroundImage:
          'linear-gradient(' +
          deg +
          'deg, ' +
          gradient[0] +
          ',' +
          gradient[1] +
          ' )',
        scale: scale,
        animationDelay: animationDelay + 's',
      }}
    ></div>
  );
};
