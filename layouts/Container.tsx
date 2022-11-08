import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { PageTransition } from "../animations/PageTransition";
import NavBar from "../components/NavBar";

const Container = (props: any) => {
  const { children } = props;
  return (
    <Box as="div" minW="100vw" minH="100vh" bgColor="#F5F6FB">
      <NavBar />
      <Flex
        flexDir={"column"}
        justifyContent={"center"}
        w={{ base: "50%", sm: "90%", md: "70%" }} 
        // minW="100%" minH="100%"
        mt="5" //margin top
        mx="auto" //marginX
      >
        <PageTransition          
        >{children}</PageTransition>
      </Flex>
    </Box>
  );
};

export default Container;
