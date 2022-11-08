import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { activityFormFields } from "./FormTypes/AddActivityFields";

const AddActivityForm = (props: any) => {
  const { activities, setActivities } = props;
  const [act, setAct] = useState<any>();
  return (
    <>
      <Box bg="white" mt="5" p="10">
        <Flex
          flexDir={{ base: "column", sm: "column", md: "row" }}
          alignItems={{ lg: "center" }}
          justifyContent={{ md: "space-between" }}
        >
          <Text fontSize={"2xl"} fontWeight="bold" mb="5">
            Activity Details
          </Text>
          <Button
            onClick={() => {
              setActivities([...activities, act]);
            }}
            mb="5"
          >
            Add an Activity
          </Button>
        </Flex>
        {activities.map((act: any, idx:number) => {
          return <Box key={idx}>{act.name}</Box>;
        })}
        <FormControl>
          <SimpleGrid minChildWidth={"400px"} gap="5">
            {activityFormFields.map((field) => {
              return (
                <Box key={field.name} mb="1">
                  <FormLabel>{field.label}</FormLabel>
                  <Input
                    name={field.name}
                    type={field.type}
                    onChange={(e: any) => {
                      setAct({ ...act, [e.target.name]: e.target.value });
                    }}
                  />
                  <FormHelperText>{field.helperText}</FormHelperText>
                </Box>
              );
            })}
          </SimpleGrid>
        </FormControl>
      </Box>
    </>
  );
};

export default AddActivityForm;
