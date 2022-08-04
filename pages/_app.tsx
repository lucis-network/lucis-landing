import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "antd/lib/style/themes/default.less";
import "antd/dist/antd.less";
import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "utils/apollo_client";
// @ts-ignore
import smoothscroll from 'smoothscroll-polyfill';

import type { AppProps } from "next/app";
import Layout from "components/layout";
import GAService from "../services/GA";
import { app_origin } from "../utils/Env";


const isClient = typeof window !== 'undefined';

if (isClient) {
  // kick off the polyfill!
  smoothscroll.polyfill();
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    GAService.setUserProperties({
      app_origin: app_origin
    });
  });
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
