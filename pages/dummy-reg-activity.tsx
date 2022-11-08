import { Button } from "@chakra-ui/button";


const data_to_send = {
  userId: 1,
  activityId: 10,
  activityDesc: "test desc",
  // Activity: undefined,
  // User: undefined,
}

const regUserAct = async () => {
  const response = await fetch("/api/reg-user-act", {
    method: "POST",
    headers:{
      "Content-type": "application/json",
    },
    body: JSON.stringify(data_to_send)
  })
  console.log("register user for an activity at front end");
  console.log(response);
  return response.json();
} 

const reg_activity = () => {
  return (
    <div>
      <Button onClick={() => regUserAct()}>register a user for an activity</Button> 
    </div>
  );
};

export default reg_activity;









