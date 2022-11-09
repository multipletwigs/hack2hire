import { Button } from "@chakra-ui/button";
import {
  Box,
  Select,
  VStack,
} from "@chakra-ui/react";
import { InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { server } from ".";
import { ActiveUserContext } from "../context/ActiveUserContext";

const fetchAllUsers = async () => {
  const response: Response = await fetch(`${server}/api/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

export async function getServerSideProps(context: any) {
  const res = await fetchAllUsers();
  return {
    props: {
      users: res.response,
    }, // will be passed to the page component as props
  }
}

const Login = ({ users }:InferGetServerSidePropsType<any>) => {
  const ActiveUser = useContext(ActiveUserContext);
  const [mounted, setMounted] = React.useState(false);
  const router = useRouter();

  useEffect(()=>{
    setMounted(true)
    console.log(mounted)
    console.log(users)
  })

  return ( mounted  && (
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
        <Box fontSize="xl" fontWeight={600} justifyContent={"center"} alignItems="center">
          {" "}
          Please Login With Your Dell Account by selecting the wanted account.
        </Box>
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
          {users ? (
            users.map((user: any) => {
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
    </VStack>)
  );
};

export default Login;
