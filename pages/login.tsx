import { Button } from "@chakra-ui/button";
import { Box, Select, useToast, VStack } from "@chakra-ui/react";
import { User } from "@prisma/client";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { useEffect } from "react";
import { ActiveUserContext } from "../context/ActiveUserContext";
import { AllUserContext } from "../context/UserContext";

const Login = () => {
  const ActiveUser = useContext(ActiveUserContext);
  const AllActiveUsers = useContext(AllUserContext);
  const router = useRouter();
  const toast = useToast(); // Dep array should be empty because we want users to only change once.

  useEffect(()=>{
    // Everytime the login page is loaded, remove an active user. 
    ActiveUser.setActiveUser(undefined)
  }, [])

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
          <Box color="#007DB8" fontSize={"4xl"} fontWeight="700">
            Dell Event Dashboard
          </Box>
        </Box>
        <Box
          fontSize="xl"
          fontWeight={600}
          justifyContent={"center"}
          alignItems="center"
        >
          {" "}
          Please Login With Your Dell Account by selecting the wanted account.
        </Box>
        <Select
          mt="2%"
          placeholder="Select Account to login"
          onChange={(event) => {
            if (event.target.value !== "") {
              ActiveUser.setActiveUser({
                activeUser: JSON.parse(event.target.value),
                setActiveUser: ActiveUser?.setActiveUser,
              });
            } else {
              ActiveUser.setActiveUser(undefined);
            }
          }}
        >
          {/* this is the list of users to choose from  */}
          {AllActiveUsers.map((user: User) => {
            return (
              <option value={JSON.stringify(user)} key={user.id}>
                {`Username: ${user.name} Email: ${user.email}`}
              </option>
            );
          })}
        </Select>
        <Button
          colorScheme={"blue"}
          mt="2%"
          w="100%"
          onClick={() => {
            if (ActiveUser.activeUser) {
              router.push("/event");
            } else {
              toast({
                title: "Login Error",
                position: "top", 
                description: "Please select a user to login",
                status: "error",             
              });
            }
          }}
        >
          Log into the Dell Event Dashboard
        </Button>
      </Box>
    </VStack>
  );
};

export default Login;
