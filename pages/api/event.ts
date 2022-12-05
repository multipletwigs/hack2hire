
import type { NextApiRequest, NextApiResponse } from "next";

import { Event } from "@prisma/client";
import { prisma } from "../../lib/db";


export default async function handler(req: NextApiRequest,res: NextApiResponse) {
  // fetches all events in the db
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
  // allow an authorized user to make a new event
  else if (req.method == "POST"){
    try {
      const body: any = req.body;
      console.log(body)
      const response: Event = await prisma.event.create({
        data:{
          name: body.name,
          startAt: body.startAt,
          endAt: body.endAt,
          location: body.location,
          description: body.description,
          creatorId: body.creatorId,
          Activity: {
            create: body.Activity.map((activity: any) => {
              return {
                name: activity.name, 
                description: activity.description,
                UserRegisterActivity: {
                  create: []  // NOTE: this is an empty list because we dont assume to have any registered users for the event yet, hence the activities as well
                }
              };
            })
          },
          NGOId: body.NGOId,
          UserAttendingEvent: {
            create: [] // NOTE: this is an empty list, because we dont assume to have any registered users for the event yet
          },
        }
      })  
      res.status(200).json({message: "created an event successfully!", response: response});
    }
    catch (e){
      console.log(e);
      res.status(405).json({message: "POST method error in event api", });
    }
  }
  // allow the admin to modify the details of the event
  else if (req.method == "PUT"){
    try{
      const body: any = req.body;
      const response: Event = await prisma.event.update({
        // find the event by id
        where: {
          id: body.id
        },
        // update the event with the following data
        data: {
          name: body.name,
          startAt: body.startAt,
          endAt: body.endAt,
          location: body.location,
          description: body.description,
          creatorId: body.creatorId,
          NGOId: body.NGOId,
        }
      })
      res.status(200).json({message: "updated an event successfully!", response: response});
    }
    catch(e){
      console.log(e);
      res.status(405).json({message: "PUT method error in event api", });
    }
  }
  else{
    res.status(405).json({message: "HTTP method is not allowed / not supported yet!" });
  }
}







