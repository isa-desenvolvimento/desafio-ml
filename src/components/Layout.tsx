import styles from '@/styles/Layout.module.scss';
import React from 'react';
import { Breadcrumbs } from 'nextjs-breadcrumbs';
import Nav from './Nav';

type LayoutProps = {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const breadcrumbs = Breadcrumbs();

  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          {breadcrumbs}
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
