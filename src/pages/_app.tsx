import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import "../styles/globals.css";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Head>
          <title>EZBlog</title>
        </Head>

        <Toaster position="top-center" reverseOrder={false} />

        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
