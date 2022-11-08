import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { DrawerProps } from "./ProfileDrawer";

interface LinkItem{
    name: string;
    href: string;
}

const LinkComp = (props: LinkItem)=>{
    const router = useRouter(); 
    return(
        <Link href={props.href}>
            <Box fontWeight={router.asPath === props.href ? 700: 300}>{props.name}</Box>
        </Link>
    )
}

const NavDrawer = (props: DrawerProps) => {
  return (
    <>
      <IconButton
        onClick={props.onOpen}
        aria-label={""}
        icon={<GiHamburgerMenu />}
      />
      <Drawer isOpen={props.isOpen} placement="left" onClose={props.onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Navigation</DrawerHeader>
          <DrawerBody>
            <Box >
              <LinkComp href="/event" name="Events"/>
              <LinkComp href="/NGO" name="NGOs"/>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavDrawer;
