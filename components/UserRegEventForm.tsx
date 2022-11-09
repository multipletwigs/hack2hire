import { Box, Text } from "@chakra-ui/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { ActiveUserContext } from "../context/ActiveUserContext";



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
  console.log(res.json());
  return res.json();
};



const UserRegEventForm = () => {
  // const [useAssNGOState, setAssNGOState] = useState<any[]>([]);
  // const { data } = useQuery({queryKey: [], queryFn: getAssociatedNGOs,});

  // useEffect(()=>{
  //   if(data){
  //     setAssNGOState(data.response);
  //   }
  // }, [data, useAssNGOState])
  
  return (
    <div>
      <Box bgColor={"white"} p="10" mt="5">
        <Text fontSize={"lg"} fontWeight="bold" mb="5">
          All registered for the event!
          Family Members: 2
        </Text>
      </Box>
      <Box bgColor={"white"} p="10" mt="5">
        <Text fontSize={"lg"} fontWeight="bold" mb="5">
          Family Member 1:
        </Text>
        <Text fontSize={"md"} mb="5">
          T shirt size: L
        </Text>
        <Text fontSize={"md"} mb="5">
          Food Voucher Code: qddad-331-fs232
        </Text>
      </Box>
      <Box bgColor={"white"} p="10" mt="5">
        <Text fontSize={"lg"} fontWeight="bold" mb="5">
          Family Member 2:
        </Text>
        <Text fontSize={"md"} mb="5">
          T shirt size: M
        </Text>
        <Text fontSize={"md"} mb="5">
          Food Voucher Code: djgfb-31320-fs232
        </Text>
      </Box>

        {/* <Text fontSize={"2xl"} fontWeight="bold" mb="5">
          Select an NGO to pledge your fees to
        </Text>
        <Text fontSize={"md"} fontWeight="bold" mb="5">
          checkout all the NGO(s) listed below!
        </Text> */}
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
        {/* {
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
        } */}
    </div>
  )
}

export default UserRegEventForm













