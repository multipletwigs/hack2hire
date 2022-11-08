// to allow the admin to create more activities within an event

import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";
import { Activity } from "@prisma/client";

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
  if (req.method === "GET"){
    res.status(200).json({message: "get method under development" });
  }
  // allows creation of a new activity
  else if (req.method ==="POST"){
    const body: any = req.body;

    const response: Activity = await prisma.activity.create({
      data: {
        name: body.name,
        description: body.description,
        eventId: body.eventId,
        UserRegisterActivity: {
          create: []  // NOTE: this is empty because we dont expect any user to be registered in this new activity yet
        }
      }
    })
    res.status(200).json({message: `created a new activity within the event with id: ${body.eventId}`, response: response });
  }
  else{
    res.status(405).json({message: "method not allowed"});
  }

  // allows registering new users to an activity
  // else if (req.method ==="PUT"){
  //   const body: any = req.body;

    // 1: fetch all the for UserRegisterActivity objects for this activity 
    // const activity = await prisma.userRegisterActivity.findMany({
    //   where: { activityId: body.activityId}, // NOTE: take note that body.activityId is Activity.id
    //   select: {

    //   },
    // })

    // 2: register the user into an activity, create new UserRegisterActivity objects
    // const response = await prisma.activity.update({
    //   where: { id: body.id },
    //   data: {
    //     UserRegisterActivity: {
    //       create: body.userIds.map((userId: number) => {
    //         return {
    //           userId: userId,
    //           activityId: body.id,
    //         }
    //       }),
    //     },
    //   },
    // })

    // 3: add the UserRegisterActivity objects to User, Event and Activity



    // const response: Activity = await prisma.activity.update({
    //   where: {
    //     id: body.activityId
    //   },
    //   data: {
    //     UserRegisterActivity: {
    //       create: body.userIds.map((userId: number) => {
    //         return {
    //           userId: userId
    //         }
    //       }
    //       )
    //     }
    //   }
    // })

    // res.status(200).json({message: `updated the activity: ${body.eventId}` });
  // }



  
}










