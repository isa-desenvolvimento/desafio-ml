import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.scss';
import '@/styles/variables.scss';

import Layout from '@/components/Layout';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <div>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </div>
);

export default MyApp;
