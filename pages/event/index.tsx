import { Box, Flex } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { PageTransition } from "../../animations/PageTransition";
import NavBar from "../../components/NavBar";
import { ActiveUserContext } from "../../context/ActiveUserContext";
import Container from "../../layouts/Container";

const EventPage = (props: any) => {
  const AllActiveUser = useContext(ActiveUserContext);

  return (
    <Container>
        <Box>
            Events page
        </Box>
    </Container>
  );
};

export default EventPage;
