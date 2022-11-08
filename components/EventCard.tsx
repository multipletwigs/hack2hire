import { Box, Button, HStack, Tag, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { ActiveUserContext } from "../context/ActiveUserContext";

interface CardProps {
  NGOId: number;
  createdAt: string;
  creatorId: number;
  description: string;
  endAt: string;
  id: number;
  location: string;
  name: string;
  startAt: string;
  updatedAt: string;
}

const EventCard = (props: CardProps) => {
  const activeUser = useContext(ActiveUserContext);
  const router = useRouter();
  const { slug } = router.query; // This is the slug of the event
  const startAtFormat = new Date(props.startAt).toLocaleString();
  const endAtFormat = new Date(props.endAt).toLocaleString();
  const upcoming = new Date(props.startAt) > new Date();
  const ongoing =
    new Date(props.startAt) < new Date() && new Date(props.endAt) > new Date();
  const ended = new Date(props.endAt) < new Date();
  const status = upcoming ? (
    <HStack>
      <Tag colorScheme={"yellow"}>Upcoming</Tag>
      <Tag colorScheme="orange">Starts at {startAtFormat}</Tag>
    </HStack>
  ) : ongoing ? (
    <HStack>
      <Tag colorScheme={"teal"}>Ongoing</Tag>
      <Tag colorScheme="purple">Starts at {startAtFormat}</Tag>
    </HStack>
  ) : (
    <HStack>
      <Tag colorScheme={"red"}>Ended</Tag>
      <Tag colorScheme="orange">Ended at {endAtFormat}</Tag>
    </HStack>
  );

  return (
    <Box p="5" bg="white">
      <Text fontSize={"2xl"} fontWeight="extrabold">
        {props.name}
      </Text>
      <Text fontSize={"md"} color="#A0AEC0" fontWeight={600} mb="2">
        {props.description}
      </Text>
      {status}
      <VStack mt="5">
        <Button
          w="100%"
          onClick={() => {
            if (upcoming) {
              router.push("/event/" + props.id);
            } else if (ongoing) {
              
            } else if(ended){
              router.push(`/event/${props.id}/register`);
            }
          }}
          disabled={ended}
        >
          {ended
            ? "Event Ended"
            : ongoing
            ? "Check in Activities"
            : "Register Events"}
        </Button>
        {activeUser?.activeUser.role === "ADMIN" ? (
          <Button w="100%">Edit Event</Button>
        ) : null}
      </VStack>
    </Box>
  );
};

export default EventCard;
