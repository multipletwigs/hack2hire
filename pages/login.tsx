import { Button } from "@chakra-ui/button";
import { Box, Flex, Select } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { ActiveUserContext } from "../context/ActiveUserContext";
import { AllUserContext } from "../context/UserContext";

const login = () => {
  const allUserData = useContext(AllUserContext);
  const ActiveUser = useContext(ActiveUserContext);
  const router = useRouter();

  return (
    <Box as="div" minW="100vw" minH="100vh" bgColor="#F5F6FB">
      <Flex
        flexDir={"column"}
        justifyContent={"center"}
        w={{ base: "50%", sm: "90%", md: "70%" }}
        mt="5"
        mx="auto"
      >
        <Select
          onChange={(event) => {
            ActiveUser?.setActiveUser({
              activeUser: JSON.parse(event.target.value),
              setActiveUser: ActiveUser?.setActiveUser,
            });
          }}
        >
          {allUserData ? (
            allUserData.map((user: any, idx) => {
              return <option value={JSON.stringify(user)} key={idx}>{user.name}</option>;
            })
          ) : (
            <Box>Test</Box>
          )}
        </Select>
        <Button
          onClick={() => {
            router.push("/event");
          }}
        >
          Login
        </Button>
      </Flex>
    </Box>
  );
};

export default login;
