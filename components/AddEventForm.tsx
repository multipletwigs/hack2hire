import {
  FormControl,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/form-control";
import { Box, Input } from "@chakra-ui/react";
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

const AddEventForm = () => {
  const [event, setEvent] = React.useState<EventType | {}>({});
  const handleInputChange = (e: any) => {
    // Dynamically set the state based on the input name field
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  return (
    <Box>
      <FormControl>
        <FormLabel>Event Name</FormLabel>
        <Input name="name" onChange={handleInputChange} type="text" />
        <FormHelperText>Enter a fun name for the event!</FormHelperText>
        <FormLabel>Event Description</FormLabel>
        <Input
          name="description"
          onChange={handleInputChange}
          type="text"
        ></Input>
      </FormControl>
    </Box>
  );
};

export default AddEventForm;
