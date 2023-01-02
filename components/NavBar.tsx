import { Box, HStack, Image, Text, useDisclosure } from "@chakra-ui/react";
import NavDrawer from "./NavDrawer";
import ProfileDrawer from "./ProfileDrawer";

const NavBar = () => {
  const useDiscProfile = useDisclosure();
  const useDiscNav = useDisclosure();

  return (
    <Box as="nav" h="20" bg="white">
      <Box
        h="20"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        mx="auto"
        w={{ base: "90%", sm: "90%", md: "70%" }}
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
          <ProfileDrawer
            isOpen={useDiscProfile.isOpen}
            onOpen={useDiscProfile.onOpen}
            onClose={useDiscProfile.onClose}
          />
          <NavDrawer
            isOpen={useDiscNav.isOpen}
            onOpen={useDiscNav.onOpen}
            onClose={useDiscNav.onClose}
          />
        </HStack>
      </Box>
    </Box>
  );
};

export default NavBar;
