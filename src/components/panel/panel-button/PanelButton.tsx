import styles from './PanelButton.module.scss';
import { RelType, TargetType } from '../../link-button/LinkButton.tsx';
export interface PanelButtonProps {
  title: string;
  href: string;
  target?: TargetType;
  rel?: RelType;
}

export const PanelButton = ({
  title,
  href,
  target = '_self',
  rel,
}: PanelButtonProps) => {
  return (
    <a className={styles.panelButton} href={href} target={target} rel={rel}>
      {title}
    </a>
  );
};
