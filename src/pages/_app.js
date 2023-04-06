import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";

import { Inter } from 'next/font/google'
// import "bootstrap/dist/css/bootstrap.min.css";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import Mainlayout from '../components/layout/main.layout';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:3035/graphql",
});

const inter = Inter({ subsets: ['latin'] })

export default function  App({ Component, pageProps })  {
  return (
    <ApolloProvider client={client}>
       <Mainlayout>
        <Component {...pageProps}/>
       </Mainlayout>
    </ApolloProvider>
  )
}

