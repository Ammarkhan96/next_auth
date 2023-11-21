"use client"
import { useSession } from "next-auth/react"

export default function AboutPage() {
  const { data: session, status } = useSession()
  console.log(session, "session")
          return (
            <main className='flex w-full items-center justify-center p-4'>
              <h2 className='text-3xl font-bold text-blue-500'>This is AboutPage</h2>
            </main>
          )
        }