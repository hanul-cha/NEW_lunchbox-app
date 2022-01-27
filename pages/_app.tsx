import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../compoenets/Layout";
import wrapper from "../src/Store";


function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  );
}

export default wrapper.withRedux(MyApp);
