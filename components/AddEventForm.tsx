import {
  FormControl,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/form-control";
import {
  Box,
  Button,
  Input,
  Select,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { ActiveUserContext } from "../context/ActiveUserContext";
import AddActivityForm from "./AddActivityForm";
import { EventType, formFields } from "./FormTypes/AddEventFields";

const getNGOs = async () => {
  const res = await fetch("/api/ngo", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  return res.json();
};

const submitEvent = async (event: any) => {
  event = {
    ...event,
    startAt: new Date(event.startAt),
    endAt: new Date(event.endAt),
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const res = await fetch("/api/event", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(event),
  });
  return res;
};

const AddEventForm = () => {
  const [event, setEvent] = useState<EventType | {}>({});
  const [useActivities, setActivities] = useState<any>([]);
  const currentActive = useContext(ActiveUserContext);
  const [setNGOs, setNGO] = useState<any>([]);

  const { data } = useQuery({
    queryKey: ["events"],
    queryFn: getNGOs,
  });

  const { isLoading, mutate } = useMutation({
    mutationKey: ["event"],
    mutationFn: submitEvent,
    onSuccess: ()=>{}
  });

  const handleInputChange = (e: any) => {
    // Dynamically set the state based on the input name field
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
      Activity: useActivities,
      creatorId: currentActive?.activeUser.id,
    });
  };

  useEffect(() => {
    if (data) {
      setNGO(data.response);
    }
  }, [data, event]);

  return (
    <>
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
                  <Input
                    name={field.name}
                    onChange={handleInputChange}
                    type={field.type}
                  />
                  <FormHelperText>{field.helperText}</FormHelperText>
                </Box>
              );
            })}
          </SimpleGrid>
        </FormControl>
        <FormControl>
          <FormLabel>Select NGO to host</FormLabel>
          <Select
            placeholder="Select an NGO host event"
            name={"ngoId"}
            onChange={(e) => {
              setEvent({ ...event, NGOId: parseInt(e.target.value) });
            }}
          >
            {setNGOs !== undefined
              ? setNGOs.map((ngo: any, idx: number) => {
                  return (
                    <option key={idx} value={ngo.id}>
                      {ngo.NGO_name}
                    </option>
                  );
                })
              : null}
          </Select>
          <FormHelperText>
            You may only select one NGO per event for now
          </FormHelperText>
        </FormControl>
      </Box>
      <AddActivityForm
        setActivities={setActivities}
        activities={useActivities}
      />
      <Box bg="white" mt="5" p="10">
        <Text fontSize={"2xl"} fontWeight="700">
          Confirm Adding Event
        </Text>
        <Button
          colorScheme={"blue"}
          mt="5"
          onClick={() => {
            mutate(event);
          }}
          isDisabled={isLoading}
        >
          <Box>
            {isLoading ? (
              <Box>
                <Spinner/> <Text>Adding to the database</Text>
              </Box>
            ) : (
              "Add the Event with Activities"
            )}
          </Box>
        </Button>
      </Box>
    </>
  );
};

export default AddEventForm;
