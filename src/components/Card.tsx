import styles from '@/styles/Card.module.scss';
import { ReactNode } from 'react';

type ICardProps = {
  children: ReactNode
}

export default function Card({ children }: ICardProps) {
  return (
    <div className={styles.cardContainer}>
      {children}
    </div>
  );
}
