
































import { Box, Text } from "@chakra-ui/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { ActiveUserContext } from "../context/ActiveUserContext";


/*
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
*/

// const getNGOs = async () => {
//   const res = await fetch("/api/ngo", {
//     method: "GET",
//     headers: {
//       "Content-type": "application/json",
//     },
//   });
//   return res.json();
// };

// TODO: fetch the event id on this clicked event item

// NOTE: fetch all NGOs associated with this event, but for now we only have 1 NGO for an Event
const getAssociatedNGOs = async (NGOId: number) => {
  const res = await fetch("/api/find_ngos_byid", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ NGOId: NGOId }),
  });
  return res.json();
};


// const associatedNGOs = await getAssociatedNGOs();

const UserRegEventForm = () => {
  return (
    <div>
      <Box bgColor={"white"} p="10" mt="5">
        <Text fontSize={"2xl"} fontWeight="bold" mb="5">
          Select an NGO to pledge your fees to
        </Text>
        <Text fontSize={"md"} fontWeight="bold" mb="5">
          checkout all the NGO(s) listed below!
        </Text>
        {/* {formFields.map((field) => {
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
        })} */}
        {
          getAssociatedNGOs(1).map((ngo: any) => {
            return (
              <Box key={ngo.id} mb="5">
                <Text fontSize={"md"} fontWeight="bold" mb="5">
                  {ngo.name}
                </Text>
                <Text fontSize={"md"} fontWeight="bold" mb="5">
                  {ngo.description}
                </Text>
              </Box>
            );
          })
        }
      </Box>
    </div>
  )
}

export default UserRegEventForm













