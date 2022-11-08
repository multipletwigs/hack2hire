import { Button } from "@chakra-ui/button";
import { useEffect } from "react"

//NOTE: 
/*
1. create an event
2. connect the associated creator (User) with this event through specifying the userid
3. create a list of associated activities with that event
4. connect a list of associated NGOs for this event
5. empty userAttending event, no user attends it yet
*/

const data_to_send = {
  name: "test event",
  startAt: new Date(),
  endAt: new Date(),
  location: "melbourne",
  description: "no desc",
  creeatedAt: new Date(),
  updatedAt: new Date(),
  creatorId: 1,
  Activity: [
    {
      name: "test-activity1",
      description: "-31313",
      UserRegisterActivity: []
    },
    {
      name: "test-activity2",
      description: "-3131",
      UserRegisterActivity: []
    },
  ],
  NGOId: 1,
  UserAttendingEvent: [],
}

// const fetching = async () => {
//   const response = await fetch("/api/event", {
//     // NOTE: change HTTP methods here
//     method: "GET",
//     headers:{
//       "Content-type": "application/json",
//     }
//   })
//   console.log(response);
//   return response.json();
// } 

const addEvent = async () => {
  const response = await fetch("/api/event", {
    // NOTE: change HTTP methods here
    method: "POST",
    headers:{
      "Content-type": "application/json",
    },
    body: JSON.stringify(data_to_send)
  })
  console.log(response);
  return response.json();
} 


const data_to_modify = {...data_to_send, id: 16, name: "test event modified"};

const editEvent = async () => {
  const response = await fetch("/api/event", {
    // NOTE: change HTTP methods here
    method: "PUT",
    headers:{
      "Content-type": "application/json",
    },
    body: JSON.stringify(data_to_modify)
  })
  console.log(response);
  return response.json();
} 



const Test_event = () => {
  // useEffect(() => {
  //   fetching()
  // })

  return (
    <div>
      <Button onClick={() => addEvent()}>Add Event</Button> 
      <Button onClick={() => editEvent()}>Edit Event</Button> 
    </div>
  );
};

export default Test_event;









