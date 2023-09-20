// import nc from "next-connect";
// import dbConnect from "@/backend/config/dbConnect";
// import {
//   getAddresses,
//   newAddress,
// } from "@/backend/controllers/addressControllers";
// import { isAuthenticatedUser } from "@/backend/middlewares/auth";

// import onError from "@/backend/middlewares/errors";

// const handler = nc({ onError });

// dbConnect();

// handler.use(isAuthenticatedUser).get(getAddresses);
// handler.use(isAuthenticatedUser).post(newAddress);

// export default handler;

import dbConnect from "@/backend/config/dbConnect";
import {
  getAddress,
  getAddresses,
  newAddress,
} from "@/backend/controllers/addressControllers";
import onError from "@/backend/middlewares/errors";
// import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

dbConnect();

export default async function handler(req, res) {
  try {
    const session = await getSession({ req });
    console.log("voici donc ma session", session);
 
    if(req.method==="GET"){
      
      console.log("on execute le get",session)
      
       req= session
       const userId = session.user._id
       console.log(userId)

      getAddresses(req,res , userId);
        // return res.status(200).json({ addresses });


    }
    else if(req.method==="POST"){
      // req= session
console.log("on execute le post")
      newAddress(req,res);
        // return res.status(200).json({ addresses });


    }

    // if (!session) {
    //   return res
    //     .status(401)
    //     .json({ message: "vous n'ete pas authorise , inscrivez vous d'abord" });
    // }
    // if (req.method == "GET") {
    //   const addresses = await getAddress();
    //   return res.status(200).json({ addresses });
    // } else if (req.method == "POST") {
    //   const address = await newAddress(req.body);
    //   return res.status(200).json({ address });
    // } else {
    //   // Gérer les autres méthodes HTTP si nécessaire
    //   return res.status(405).json({ message: "Method Not Allowed" });
    // }
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "server interne" });
  }
}
