import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  IconButton,
  Select,
  VStack,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Role, User } from "prisma/prisma-client";
import { AllUserContext } from "../context/UserContext";
import { ActiveUserContext } from "../context/ActiveUserContext";
import { useRouter } from "next/router";

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
  const ActiveUser = useContext(ActiveUserContext);
  const router = useRouter(); 
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
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={() =>{
              props.onClose() 
              router.push('/login')
            }}>
              Logout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ProfileDrawer;
