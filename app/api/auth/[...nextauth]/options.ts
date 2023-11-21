import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const options: NextAuthOptions = {
  providers: [
  CredentialsProvider({
          name: "Credentials",
          credentials: {
                    username: { label: "User Name", type: "text", placeholder: "Enter your username" },
                    email: { label: "Email Address", type: "email", placeholder: "Enter your email address" },
                    password: { label: "Password", type: "password", placeholder: "Enter your password" }
                  },
                  async authorize(credentials, req) {
                    const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
              
                    if (user) {
                      
                      return user
                    } else {
                      
                      return null
              
                    }
                  },

  }),

  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
  }),
  ],

  callbacks: {
    async jwt({token, account, profile}){
      console.log(token, "token")
      console.log(account, "account")
      console.log(profile, "profile")

      return token;
    },

    },
    debug: process.env.NODE_ENV !== "production",
    secret: process.env.NEXTAUTH_SECRET,
  }

  