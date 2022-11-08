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

  ]
}

const fetching = async () => {
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


const Test_event = () => {
  useEffect(() => {
    fetching()
  })

  return (
    <div>
      test event 
    </div>
  )
}

export default Test_event;









