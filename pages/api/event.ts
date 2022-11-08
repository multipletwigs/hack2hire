
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";


export default async function handler(req: NextApiRequest,res: NextApiResponse) {
  
  if (req.method == "GET"){
    const event: any = req.body;

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

    const response: Event = await prisma.event.create({
      data:{
        id: event.id;
        id: event
      }
    })

  }
  else if (req.method == "POST"){

  }
  else if (req.method) {

  }
}







