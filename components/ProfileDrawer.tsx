import {
    Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  IconButton,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Role } from "prisma/prisma-client";

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
            <Box>Profile</Box>
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
