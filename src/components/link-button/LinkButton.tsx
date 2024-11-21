import styles from './LinkButton.module.scss';

type relType = 'noReferrer';
type targetType = '_self' | '_blank' | '_parent';
type iconType = 'mail' | 'github' | 'linkedin';

export interface LinkButtonProps {
  href: string;
  title: string;
  target?: targetType;
  rel?: relType;
  className?: string;
  icon?: iconType;
}

export const LinkButton = ({
  href,
  title,
  target,
  rel,
  iconType,
  className,
}: LinkButtonProps) => {
  return (
    <div className={`${styles.linkButton} ${className}`}>
      <a
        href={href}
        target={target ?? '_blank'}
        rel={rel ?? 'noreferrer'}
        className={styles[iconType]}
      >
        {title}
      </a>
    </div>
  );
};
