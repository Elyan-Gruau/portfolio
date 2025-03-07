import styles from './LinkButton.module.scss';

export type RelType = 'noReferrer';
export type TargetType = '_self' | '_blank' | '_parent';
export type IconType = 'mail' | 'github' | 'linkedin';

export interface LinkButtonProps {
  href: string;
  title: string;
  target?: TargetType;
  rel?: RelType;
  className?: string;
  icon?: IconType;
}

export const LinkButton = ({
  href,
  title,
  target,
  rel,
  icon = 'mail',
  className,
}: LinkButtonProps) => {
  return (
    <div className={`${styles.linkButton} ${className} `}>
      <a
        href={href}
        target={target ?? '_blank'}
        rel={rel ?? 'noreferrer'}
        className={styles[icon]}
      >
        {title}
      </a>
    </div>
  );
};
