import { Button } from "@chakra-ui/button";
import { useEffect } from "react"


const data_to_send = {
  name: "test event",
  startAt: new Date(),
  endAt: new Date(),
  location: "melbourne",
  description: "no desc",
  creatorId: 0,
  Activity: [
    {
      name: "test-activity1",
      desc: "-"
    },
    {
      name: "test-activity2",
      desc: "-"
    },
  ],
  NGOforEvent: [

  ],
  UserAttendingEvent: [

  ],
};

// const fetching = async () => {
//   // NOTE: change HTTP methods here
//   const response = await fetch("/api/event", {
//     method: "POST",
//     headers:{
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(data_to_send)
//   });

//   console.log(response);
//   return response;
// } 

const addEvent = async () => {
  console.log("before calling API");
  // console.log(data_to_send);

  const response = await fetch("/api/event", {
    method: "POST",
    headers:{
      "Content-type": "application/json",
    },
    body: JSON.stringify(data_to_send)
  });

  console.log("response at FE");
  console.log(response);
  return response;
  
  // console.log("error at addEvent");

  // console.log(e);

} 

const Test_event = () => {
  // useEffect(() => {
  //   fetching()
  // })

  return (
    <div>
      <Button onClick={() =>  addEvent()}>Add Event</Button>
    </div>
  );
}

export default Test_event;









