import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";
import { UserAttendingEvent } from "@prisma/client";

export default async function handler(req: NextApiRequest,res: NextApiResponse) {

  if (req.method == "GET"){
    try{
      const response: UserAttendingEvent[] = await prisma.userAttendingEvent.findMany();
      console.log("response at api/user-att-event");
      console.log(response);
      res.status(200).json({message: "fetched userAttendingEvent(s) successfully", response: response});
    }
    catch(e){
      res.status(405).json({message: "GET method error in api/user-att-event", });
    }
  }
  else if (req.method === "POST"){
    try{
      const body: any = req.body;  
      // NOTE: because the underlying db is relational, we assume to be not concerned with row-level updates of the referenced tables
      const response: UserAttendingEvent = await prisma.userAttendingEvent.create({
        data: {
          userId: body.userId,
          eventId: body.eventId,
        }
      })
      res.status(200).json({message: `created a new UserAttendingEvent object`, response: response });
    }
    catch(e){
      console.log(e);
      res.status(405).json({message: `failed to create a new UserAttendingEvent object`});
    }
  }
  else{
    res.status(405).json({message: "method not allowed" });
  }
}





