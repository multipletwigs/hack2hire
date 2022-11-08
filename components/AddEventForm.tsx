import {
  FormControl,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/form-control";
import { Box, Input, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

interface ActivityType {
  name: string;
  description: string;
}

interface EventType {
  name: string;
  startAt: Date;
  endAt: Date;
  location: string;
  description: string;
  creatorId: number;
  Activity: ActivityType[];
  NGOId: number;
}

const formFields = [
  {
    name: "name",
    label: "Event Name",
    helperText: "Enter a fun name for the event",
    type:"text"
  },
  {
    name: "description",
    label: "Event Description",
    helperText: "Enter a fun short for the event",
    type:"text"
  },
  {
    name: "location",
    label: "Event Location",
    helperText: "Enter the location of the event",
    type:"text"
  },
  {
    name: "startAt",
    label: "Event Start Date",
    helperText: "When does the event start?",
    type:"datetime-local"
  },
  {
    name: "endAt",
    label: "Event End Date",
    helperText: "When does the event end?",
    type:"datetime-local"
  }
];

const AddEventForm = () => {
  const [event, setEvent] = React.useState<EventType | {}>({});
  const handleInputChange = (e: any) => {
    // Dynamically set the state based on the input name field
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  return (
    <Box bgColor={"white"} p="10" mt="5">
      <Text fontSize={"2xl"} fontWeight="bold" mb="5">
        Event Details
      </Text>
      <FormControl>
        <SimpleGrid minChildWidth={"400px"} gap="5">
        {formFields.map((field) => {
          return (
            <Box key={field.name} mb="5">
              <FormLabel>{field.label}</FormLabel>
              <Input name={field.name} onChange={handleInputChange} type={field.type} />
              <FormHelperText>{field.helperText}</FormHelperText>
            </Box>
          );
        })}
        </SimpleGrid>
      </FormControl>
    </Box>
  );
};

export default AddEventForm;
