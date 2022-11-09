import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import Header from "../../components/Header";
import Container from "../../layouts/Container";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useQuery } from "@tanstack/react-query";
import EventCard from "../../components/EventCard";
import { useRouter } from "next/router";
import { server } from "..";
import { ActiveUserContext } from "../../context/ActiveUserContext";

const getEvents = async () => {
  const res = await fetch(`${server}/api/event`, {
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
  const currActiveUser = useContext(ActiveUserContext)
  const isAdmin = currActiveUser?.activeUser?.role === "ADMIN"

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
        desc={isAdmin ? "View existing events, add new events or modify them!" : "Register for fun company events!"}
        buttons={isAdmin ? 
         (<Button
            justifyContent={"center"}
            w="100%"
            aria-label={"Adding a new Event"}
            onClick={() => {
              router.push("/event/addEvent");
            }}
            leftIcon={<BsFillPlusCircleFill />}
          >
            <Box fontWeight={"bold"}>Add a new Event</Box>
          </Button>) : <Button hidden></Button>
        }
      ></Header>
      <SimpleGrid mt="5" minChildWidth={"350px"} gap="3">
        {useEvents.map((event: any) => {
          return <EventCard {...event} key={event.id}></EventCard>;
        })}
      </SimpleGrid>
      {
        useEvents.length == 0 ? <Box>No Events</Box> : null
      }
    </Container>
  );
};

export default EventPage;
