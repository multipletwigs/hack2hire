// gets the NGO(s) associated with an event

import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";
import { NGO, Event } from "@prisma/client";

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
//   if (req.method == "GET") {
//     try {
//       const eventId: number = parseInt(req.query.eventId as string);
//       const response: NGO[] = await prisma.nGO.findMany({
//         where: {
//           Event: {
//             some: {
//               id: eventId
//             }
//           }
//         }
//       });
//       console.log("response at api/event_ngo");
//       console.log(response);
//       res.status(200).json({message: "fetched ngo(s) successfully", response: response});
//     }
//     catch(e){
//       res.status(405).json({message: "GET method error in api/event_ngo", });
//     }
//   }
//   else{

//   }

}





