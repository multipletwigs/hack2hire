import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  HStack,
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
              <Box w="100%">
                <Divider my="5"></Divider>
                <Text fontSize={"lg"} fontWeight="700" textAlign={'left'}>Announcements by Admin</Text>
                <Text fontWeight="700" textAlign={'left'} color="#A0AEC0">Reminders about events</Text>
                <Box bg="#F5F6FB" px="5" py="3" mt="3">
                  <Text fontSize={"md"} fontWeight="700" textAlign={'left'}>Venue Change</Text>
                  <Text fontSize="sm">The venue for activity 10 has changed to another floor 7.</Text>
                  <HStack mt="2">
                    <Tag colorScheme={"red"}>URGENT</Tag><Tag colorScheme={"orange"}>Movie Night</Tag>
                  </HStack>
                </Box>
                <Box bg="#F5F6FB" px="5" py="3" mt="3">
                  <Text fontSize={"md"} fontWeight="700" textAlign={'left'}>Bring your own Mic</Text>
                  <Text fontSize="sm">Karaoke place ran out of mic, so please bring your own</Text>
                  <HStack mt="2">
                    <Tag colorScheme={"teal"}>MINOR</Tag><Tag colorScheme={"orange"}>Karaoke Night</Tag>
                  </HStack>
                </Box>
              </Box>
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
