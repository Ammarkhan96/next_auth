import { getServerSession } from "next-auth";

export default async function ProfilePage() {

    const session =  await getServerSession()
    console.log(session, "session")
          return (
            <main className='flex w-full items-center justify-center p-4'>
              <h2 className='text-3xl font-bold text-blue-500'>This is ProfilePage {session?.user?.name}</h2>
            </main>
          )
        }