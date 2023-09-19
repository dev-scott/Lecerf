import { cookies } from "next/headers";
import { getCookieName } from "@/helpers/helpers";


export const getNextAuthSessionToken = ()=>{

    const nextCookies = cookies();
    const cookieName = getCookieName();
    const nextAuthSessionToken = nextCookies.get(cookieName);
    
    return nextAuthSessionToken
  
  
  }