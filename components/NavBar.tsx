import { Box, HStack, IconButton, Image, Select, Text } from "@chakra-ui/react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useContext, useEffect } from "react";

const NavBar = () => {

  return (
    <Box as="nav" h="20" bg="white">
      <Box
        h="20"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        mx="auto"
        w={{ base: "50%", sm: "90%", md: "70%" }}
      >
        <HStack>
          <Image
            src={"/static/dell_logo.png"}
            alt={"Dell Logo"}
            width="40px"
            height="40px"
          />
          <Text fontSize="lg" fontWeight={"bold"}>
            Events Dashboard
          </Text>
        </HStack>
        <HStack>
          <IconButton
            aria-label={"Open Profile Drawer"}
            icon={<GiHamburgerMenu />}
          />

          <IconButton
            aria-label={"Open Nav Bar Drawer"}
            icon={<BsFillPersonLinesFill />}
          />
        </HStack>
      </Box>
    </Box>
  );
};

export default NavBar;
