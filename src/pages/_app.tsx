import type { AppProps } from "next/app";
import Head from "next/head";
import { Global, css } from '@emotion/react'
import { Normalize } from "../styles/Normalize";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
        <Global
          styles={css`${Normalize}`}
        />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
