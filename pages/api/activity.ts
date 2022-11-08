import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";


export default async function handler(req: NextApiRequest,res: NextApiResponse) {
  if (req.method === "GET"){
    res.status(200).json({message: "get method under development" });
  }
  else if (req.method ==="POST"){
    res.status(200).json({message: "POST method under development" });
  }
  else{
    res.status(405).json({message: "method not allowed"});
  }



  
}










