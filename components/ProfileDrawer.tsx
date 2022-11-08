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
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Role } from "prisma/prisma-client";
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
              <Box textAlign={'center'}>
                <Text fontWeight={700} fontSize="3xl">Welcome!</Text>
                <Text fontSize="2xl">{ActiveUser?.activeUser.name}</Text>
              </Box>
              <Tag fontWeight="bold">{`CURRENTLY LOGGED IN AS ${ActiveUser?.activeUser.role}`}</Tag>
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="solid" mr={3} onClick={() =>{
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
