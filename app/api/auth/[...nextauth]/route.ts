import NextAuth from "next-auth"
import { options } from "./options"

const handler = NextAuth(options)
        
        export { handler as GET, handler as POST }



   //http://localhost:3000/api/auth/providers