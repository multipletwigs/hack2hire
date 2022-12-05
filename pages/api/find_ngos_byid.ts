
import type { NextApiRequest, NextApiResponse } from "next";
import { NGO, PrismaClient } from "@prisma/client";
import { prisma } from "../../lib/db";


export default async function handler(req: NextApiRequest,res: NextApiResponse) {
  if (req.method == "GET"){
    const body: any = req.body;
    try{
      const response: NGO[] = await prisma.nGO.findMany(
        {
          where: {
            id: body.NGOId,
          }
        }
      );
      console.log("response at api/event");
      console.log(response);
      res.status(200).json({message: "fetched users successfully", response: response});
    }
    catch(e){
      res.status(405).json({message: "GET method error in api/user", });
    }
  }
  else{
    res.status(405).json({message: "HTTP method not allowed in api/user"});
  }
}