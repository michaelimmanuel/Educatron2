import { Fragment } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "./global.css";
import { SessionProvider } from "next-auth/react";
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
    <Fragment>
      <Head>
        <title>Educatron</title>
        <meta
          name="viewport"
          content="minimum-scale=0, initial-scale=0, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
    </SessionProvider>
  );
}

export default MyApp;
