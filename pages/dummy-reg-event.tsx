import { Button } from "@chakra-ui/button";


const data_to_send = {
  userId: 1,
  eventId: 18,
}

const regUserEvent = async () => {
  const response = await fetch("/api/reg-user-event", {
    method: "POST",
    headers:{
      "Content-type": "application/json",
    },
    body: JSON.stringify(data_to_send)
  })
  console.log("register user for an event at front end");
  console.log(response);
  return response.json();
} 

const reg_event = () => {
  return (
    <div>
      <Button onClick={() => regUserEvent()}>register a user for an event</Button> 
    </div>
  );
};

export default reg_event;









