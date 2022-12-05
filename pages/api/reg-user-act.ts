import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, UserRegisterActivity } from "@prisma/client";

// connectOrCreate:{
//   where: {
//     email: 'viola@prisma.io',
//   },
//   create: {
//     email: 'viola@prisma.io',
//     name: 'Viola',
//   },            

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
  const prisma = new PrismaClient()
  if (req.method === "POST"){
    try{
      const body: any = req.body;
  
      // TODO: see if we need to check whether the user is actually enrolled into the event associated with this activity first (throw error if illegal API call)
      // (maybe frontend just dont call it if not enrolled)
  
      // NOTE: because the underlying db is relational, we assume to be not concerned with row-level updates of the referenced tables
      const response: UserRegisterActivity = await prisma.userRegisterActivity.create({
        data: {
          userId: body.userId,
          activityId: body.activityId,
        }
      })
      res.status(200).json({message: `created a new UserRegisterActivity object`, response: response });
    }
    catch(e){
      console.log(e);
      res.status(405).json({message: `failed to create a new UserRegisterActivity object`});
    }
  }
  else{
    res.status(405).json({message: "method not allowed" });
  }
}





