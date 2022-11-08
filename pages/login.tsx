import { Button } from "@chakra-ui/button";
import {
  Box,
  Flex,
  Select,
  Image,
  Center,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { ActiveUserContext } from "../context/ActiveUserContext";
import { AllUserContext } from "../context/UserContext";

const login = () => {
  const allUserData = useContext(AllUserContext);
  const ActiveUser = useContext(ActiveUserContext);
  const router = useRouter();

  return (
    <VStack
      as="div"
      minW="100vw"
      minH="100vh"
      bgColor="#F5F6FB"
      justifyContent={"center"}
    >
      <Box w={{ base: "90%", sm: "90%", md: "40%" }}>
        <Box>
          <Text color="#007DB8" fontSize={"4xl"} fontWeight="700">
            Dell Event Dashboard
          </Text>
        </Box>
        <Text fontSize="xl" fontWeight={600} justifyContent={"center"} alignItems="center">
          {" "}
          Please Login With Your Dell Account by selecting the wanted account.
        </Text>
        <Select
          mt="2%"
          placeholder="Select Account to login"
          onChange={(event) => {
            ActiveUser?.setActiveUser({
              activeUser: JSON.parse(event.target.value),
              setActiveUser: ActiveUser?.setActiveUser,
            });
          }}
        >
          {/* this is the list of users to choose from  */}
          {allUserData ? (
            allUserData.map((user: any) => {
              return (
                <option value={JSON.stringify(user)} key={user.id}>
                  {`Username: ${user.name} Email: ${user.email}`}
                </option>
              );
            })
          ) : (
            <Box>Test</Box>
          )}
        </Select>
        <Button
          colorScheme={"blue"}
          mt="2%"
          w="100%"
          onClick={() => {
            router.push("/event");
          }}
        >
          Log into the Dell Event Dashboard
        </Button>
      </Box>
    </VStack>
  );
};

export default login;
