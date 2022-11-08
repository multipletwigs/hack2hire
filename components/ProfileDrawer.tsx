import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Role, User } from "prisma/prisma-client";
import { AllUserContext } from "../context/UserContext";
import { ActiveUserContext } from "../context/ActiveUserContext";

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

interface ProfileDrawerProps extends DrawerProps {
  name: string;
  role: Role;
  users: any; // This is temporary for showcasing to switch profiles easier
}

const ProfileDrawer = (props: DrawerProps) => {
  const allUserData = useContext(AllUserContext);
  const ActiveUser = useContext(ActiveUserContext);
  return (
    <>
      <IconButton
        onClick={props.onOpen}
        aria-label={""}
        icon={<BsFillPersonLinesFill />}
      />
      <Drawer isOpen={props.isOpen} placement="right" onClose={props.onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack>
              <Avatar
                mt="10"
                size="2xl"
                name="Dell Staff"
                bgColor={"blue.400"}
              />
              <Box>Current active: {ActiveUser?.activeUser.name}</Box>
              <Select
                onChange={(event) => {
                  ActiveUser?.setActiveUser({
                    activeUser: JSON.parse(event.target.value),
                    setActiveUser: ActiveUser?.setActiveUser,
                  });
                }}
              >
                {allUserData ? (
                  allUserData.map((user: User) => {
                    return (
                      <option value={JSON.stringify(user)}>{user.name}</option>
                    );
                  })
                ) : (
                  <Box>Test</Box>
                )}
              </Select>
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={props.onClose}>
              Logout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ProfileDrawer;
