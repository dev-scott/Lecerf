"use client"

import NewAddress from "@/components/user/NewAddress";
import { useSession } from "next-auth/react";
import React from "react";

const NewAddressPage = () => {

const {data} = useSession();
console.log("la session de l'ajout de l'adresse" , data)

  return <NewAddress />;
};

export default NewAddressPage;
