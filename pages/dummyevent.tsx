import { useEffect } from "react"


// test_event_data = {
//   name: body.id,
//   startAt: body.startAt,
//   endAt: body.endAt,
//   location: body.location,
//   description: body.description,
//   creatorId: body.creatorId,
//   Activity: body.activities,
//   NGOforEvent: body.ngos,
//   UserAttendingEvent: body.attending_users
// }

const fetching = async () => {
  const response = await fetch("/api/event", {
    // NOTE: change HTTP methods here
    method: "GET",
    headers:{
      "Content-type": "application/json",
    }
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









