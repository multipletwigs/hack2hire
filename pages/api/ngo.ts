import type { NextApiRequest, NextApiResponse } from "next";
import { NGO, PrismaClient } from "@prisma/client";
import { prisma } from "../../lib/db";

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
  if (req.method == "GET"){
    try{
      const response: NGO[] = await prisma.nGO.findMany();
      console.log("response at api/ngo");
      console.log(response);
      res.status(200).json({message: "fetched ngo(s) successfully", response: response});
    }
    catch(e){
      res.status(405).json({message: "GET method error in api/ngo", });
    }
  }
  
  else{
    res.status(405).json({message: "HTTP method not allowed in api/ngo"});
  }

}












