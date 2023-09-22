
import dbConnect from "@/backend/config/dbConnect";
import { myOrders } from "@/backend/controllers/orderControllers";

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

       myOrders(req,res , userId);
        // return res.status(200).json({ addresses });


    }



  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "server interne" });
  }
}



// import nc from "next-connect";
// import dbConnect from "@/backend/config/dbConnect";
// import onError from "@/backend/middlewares/errors";
// import { isAuthenticatedUser } from "@/backend/middlewares/auth";
// import { myOrders } from "@/backend/controllers/orderControllers";

// const handler = nc({ onError });

// dbConnect();

// handler.use(isAuthenticatedUser).get(myOrders);

// export default handler;
