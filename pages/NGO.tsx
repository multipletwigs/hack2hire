import { Button, SimpleGrid, useDisclosure } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { server } from ".";
import Header from "../components/Header";
import NGOCard from "../components/NGOCard";
import { ActiveUserContext } from "../context/ActiveUserContext";
import Container from "../layouts/Container";

const getAllNGOs = async () => {
  const res = await fetch(`${server}/api/ngo`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
};

const NGO = () => {
  const [useNGOState, setNGOState] = useState<any[]>([]);
  const { data } = useQuery({queryKey: ["ngo"], queryFn: getAllNGOs,});

  useEffect(()=>{
    if(data){
      setNGOState(data.response);
    }
  }, [data, useNGOState])
  return (
    <Container>
      <Header
        header={"List of all NGOs"}
        desc={"Checkout which NGO is willing to host the events"}
        buttons={<Button w="100%">Add an hosting NGO</Button>}
      ></Header>
      <SimpleGrid minChildWidth={"300px"} gap="5" mt="5">
        {
          useNGOState.map((ngo:any, idx)=>{
            return <NGOCard ngo={ngo} key={idx}></NGOCard>
          })
        }
      </SimpleGrid>
    </Container>
  );
};

export default NGO;
