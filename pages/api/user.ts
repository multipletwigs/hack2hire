

import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";
import { User } from "@prisma/client";


export default async function handler(req: NextApiRequest,res: NextApiResponse) {

  if (req.method == "GET"){
    try{
      const response: User[] = await prisma.user.findMany();
      console.log("response at api/event");
      console.log(response);
      res.status(200).json({message: "fetched users successfully", response: response})
    }
    catch(e){
      res.status(405).json({message: "GET method error in api/user", })
    }
  }
  else{
    res.status(405).json({message: "HTTP method not allowed in api/user"});
  }

}



