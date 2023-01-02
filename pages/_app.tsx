import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import UserProvider from "../context/UserContext";
import ActiveUserProvider from "../context/ActiveUserContext";
import Head from "next/head";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <link
        href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      ></link>
      <ChakraProvider
        theme={extendTheme({
          fonts: {
            body: "Quicksand, sans-serif",
          },
        })}
      >
        <UserProvider>
          <ActiveUserProvider>
            <Component {...pageProps} />
          </ActiveUserProvider>
        </UserProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}
