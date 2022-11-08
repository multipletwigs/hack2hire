import { Button } from "@chakra-ui/button";
import { Box, Flex, Select,Image, Center, Text  } from "@chakra-ui/react";
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
      <Center>

        <Flex
          flexDir={"column"}
          justifyContent={"center"}
          w={{ base: "50%", sm: "90%", md: "40%" }}
          mt="5"
          mx="auto"
        >
          <Box>
            <Image
              w="200px"
              h="200px"
              mx={"auto"}
              src={"/static/dell_logo.png"}
              alt={"Dell Logo"}
            />
          </Box>
          <Text fontSize='lg' justifyContent={"center"} alignItems="center"> Please Login With Your Dell Account</Text>
          <Select 
            mt="2%"
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
                return <option value={JSON.stringify(user)} key={user.id}>{user.name}</option>;
              })
            ) : (
              <Box>Test</Box>
            )}
          </Select>
          <Button
            mt="2%"
            w="100%"
            onClick={() => {
              router.push("/event");
            }}
          >
            Login
          </Button>
        </Flex>
      </Center>
    </Box>
  );
};

export default login;
