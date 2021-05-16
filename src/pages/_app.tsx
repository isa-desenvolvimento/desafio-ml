import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.scss';
import '@/styles/variables.scss';
import { ChakraProvider } from "@chakra-ui/react";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default MyApp;
