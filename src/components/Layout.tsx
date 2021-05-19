import styles from '@/styles/Layout.module.scss';
import React from 'react';
import { ChildrenProps } from '@/types/components/ChildrenProps';
import TranslationProvider from '@/locales/TranslationProvider';
import Nav from './Nav';


export default function Layout({ children }: ChildrenProps) {
  return (
    <TranslationProvider>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </TranslationProvider>
  );
}
