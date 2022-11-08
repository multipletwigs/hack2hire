import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";

interface HeaderType {
  header: string;
  desc: string;
  buttons?: JSX.Element; // React.FC is a type that represents a function component
}

const Header = (props: HeaderType) => {
  return (
    <Flex as="section" bgColor="white" py="5" px="10" flexDir={{sm:"column", lg:"row",}} alignItems={{lg:"center"}} justifyContent={{md:"space-between"}} gap={{sm:"5"}} rounded="2xl">
      <Box>
        <Text as="h1" fontSize="3xl" fontWeight="bold" textColor="">
          {props.header}
        </Text>
        <Text textColor={"#A0AEC0"} fontWeight="semibold" fontSize="lg">{props.desc}</Text>
      </Box>
      {props.buttons && <HStack>{props.buttons}</HStack>}
    </Flex>
  );
};

export default Header;
