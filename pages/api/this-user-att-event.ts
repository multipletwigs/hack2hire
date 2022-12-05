import type { NextApiRequest, NextApiResponse } from "next";
import { UserAttendingEvent } from "@prisma/client";
import { prisma } from "./activity";

export default async function handler(req: NextApiRequest,res: NextApiResponse) {

  if (req.method == "GET"){
    try{
      const body: any = req.body;
      const response: UserAttendingEvent[] = await prisma.userAttendingEvent.findMany(
        {
          where: {
            userId: body.userId,
            eventId: body.eventId,
          },
        }
      );
      console.log("response at api/user-att-event");
      console.log(response);
      res.status(200).json({message: "fetched userAttendingEvent(s) successfully", response: response});
    }
    catch(e){
      res.status(405).json({message: "GET method error in api/user-att-event", });
    }
  }
  else{
    res.status(405).json({message: "method not allowed" });
  }
}





