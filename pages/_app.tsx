import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "antd/lib/style/themes/default.less";
// import "antd/dist/antd.less";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import Layout from "components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
