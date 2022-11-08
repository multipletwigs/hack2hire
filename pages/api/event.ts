
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";
import { Event } from "@prisma/client";

/*
model Event {
  id                 Int                  @id @default(autoincrement())
  name               String
  startAt            DateTime
  endAt              DateTime
  location           String
  description        String
  createdAt          DateTime             @default(now())
  updatedAt          DateTime             @updatedAt
  creatorId          Int
  User               User                 @relation(fields: [creatorId], references: [id])
  Activity           Activity[]
  NGOforEvent        NGOforEvent[]
  UserAttendingEvent UserAttendingEvent[]
}
*/
     
export default async function handler(req: NextApiRequest,res: NextApiResponse) {
  if (req.method == "GET") {
    try {
      // res.status(405).json({message: "get method under development" });
      const response: Event[] = await prisma.event.findMany();
      console.log("response at api/event");
      console.log(response);
      res.status(200).json({message: "created an event successfully!", response: response});
    }
    catch(e){
      res.status(405).json({message: "GET method error in event api", })
    }
  }
  else if (req.method == "POST"){
    try {
      const body: any = req.body;
      const response: Event = await prisma.event.create({
        data:{
          name: body.id,
          startAt: body.startAt,
          endAt: body.endAt,
          location: body.location,
          description: body.description,
          creatorId: body.creatorId,
          Activity: body.activities,
          NGOforEvent: body.ngos,
          UserAttendingEvent: body.attending_users
        }
      })  
      res.status(200).json({message: "created an event successfully!"})
    }
    catch (e){
      res.status(405).json({message: "POST method error in event api", })
    }
  }
  else{
    res.status(405).json({message: "HTTP method is not allowed / not supported yet!" });
  }
}







