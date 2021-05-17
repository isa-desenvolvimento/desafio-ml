import React from 'react';
import Router from 'next/router';
import { AppProps } from 'next/app';
import '../styles/globals.scss';
import '@/styles/variables.scss';
import NProgress from 'nprogress';

Router.events.on("routeChangeStart", (url) => {
  console.log(url);
  NProgress.start();
});

Router.events.on("routerChangeComplete", () => NProgress.done());
Router.events.on("routerChangeError", () => NProgress.done());

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default MyApp;
