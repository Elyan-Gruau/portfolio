import styles from './Glass.module.scss';
import { ReactNode } from 'react';
export interface GlassProps {
  children: ReactNode;
  className?: string;
}

export const Glass = ({ children, className }: GlassProps) => {
  return <div className={`${styles.glass} ${className}`}>{children}</div>;
};
