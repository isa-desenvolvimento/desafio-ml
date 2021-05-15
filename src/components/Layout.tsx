import styles from '@/styles/Layout.module.scss';
import React from 'react';
import Nav from './Nav';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Nav />
    <div className={styles.container}>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  </>
);

export default Layout;
