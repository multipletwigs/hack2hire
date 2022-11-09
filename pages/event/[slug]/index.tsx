import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import UserRegEventForm from "../../../components/UserRegEventForm";
import Container from "../../../layouts/Container";

const getEvents = async () => {
  const res = await fetch("/api/event", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
};

const EventPage = () => {
  const router = useRouter();
  const { slug } = router.query; // This is the slug of the event
  const [useEvent, setEvent] = useState<any>();

  const { isLoading, data } = useQuery({
    queryKey: ["events"],
    queryFn: getEvents,
  });

  useEffect(() => {
    if (data) {
      setEvent(data.response.find((event: any) => event.id == slug));
    }
  }, [data, useEvent]);
  return (
    <Container>
      {useEvent ? (
        <Header header={useEvent.name} desc={useEvent.description}></Header>
      ) : (
        <Header header={"Loading..."} desc="loading"></Header>
      )}
      <UserRegEventForm/>
    </Container>
  );
};

export default EventPage;



