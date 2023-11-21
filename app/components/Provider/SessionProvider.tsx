"use client"

import { SessionProvider } from "next-auth/react";

type ProviderProps = {
          children: React.ReactNode,
          session: { expires: string } | null;
}

export default function Provider({children, session}: ProviderProps){
     return(
          <SessionProvider session={session}>{children}</SessionProvider>
     )
}