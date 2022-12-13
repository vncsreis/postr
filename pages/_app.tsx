import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import ContexWrapper from "../context/ContextWrapper";
import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContexWrapper>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ContexWrapper>
  );
}
