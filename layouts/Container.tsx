import { Box, Flex } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { PageTransition } from "../animations/PageTransition";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Container = (props: any) => {
  const { children } = props;
  return (
    <>
      <Head>
        <title>Dell Hack2Hire</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box as="div" maxW="100vw" minH="100vh" bgColor="#F5F6FB">
        <NavBar />
        <Flex
          flexDir={"column"}
          justifyContent={"center"}
          w={{ base: "90%", sm: "90%", md: "70%" }}
          mt="5" 
          mx="auto"
        >
          <PageTransition>{children}</PageTransition>
          <Footer />
        </Flex>
      </Box>
    </>
  );
};

export default Container;
