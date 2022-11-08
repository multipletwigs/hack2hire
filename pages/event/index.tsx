import { Box, Button, IconButton, SimpleGrid } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import Header from "../../components/Header";
import { ActiveUserContext } from "../../context/ActiveUserContext";
import Container from "../../layouts/Container";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useQuery } from "@tanstack/react-query";
import EventCard from "../../components/EventCard";
import { useRouter } from "next/router";

const getEvents = async () => {
  const res = await fetch("/api/event", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
};

const EventPage = (props: any) => {
  const [useEvents, setEvents] = React.useState<any[]>([]);

  const router = useRouter();

  const { data } = useQuery({
    queryKey: ["events"],
    queryFn: getEvents,
  });

  useEffect(() => {
    if (data) {
      setEvents(data.response);
    }
  }, [data]);

  return (
    <Container>
      <Header
        header={"Events Page"}
        desc={"View existing events, add new events or modify them"}
        buttons={
          <Button
            justifyContent={"center"}
            w="100%"
            aria-label={"Adding a new Event"}
            onClick={() => {
              router.push("/event/addEvent");
            }}
            leftIcon={<BsFillPlusCircleFill />}
          >
            <Box fontWeight={"bold"}>Add a new Event</Box>
          </Button>
        }
      ></Header>
      <SimpleGrid mt="5" minChildWidth={"350px"} gap="3">
        {useEvents.map((event: any) => {
          return <EventCard {...event} key={event.id}></EventCard>;
        })}
      </SimpleGrid>
    </Container>
  );
};

export default EventPage;
