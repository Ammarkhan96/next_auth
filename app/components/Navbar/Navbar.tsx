"use client"

import Link from "next/link"
import { signOut, signIn } from "next-auth/react"


function Navbar() {
  return (
    <nav className="w-full">
          <ul className="w-full flex items-center gap-6 justify-center">
                    <li>
                              <Link href={"/"}>Home</Link>
                              </li>
                    <li>
                              <Link href={"about"}>About</Link>
                              </li>
                    <li>
                              <Link href={"/profile"}>Profile</Link>
                              </li>
                              <li>
                              <button className="p-2 bg-slate-600" onClick={() => signOut()}>SignOut Button</button>
                              </li>
                                <li>
                              <button className="p-2 bg-slate-600" onClick={() => signIn("google")}>SignIn google Button</button>
                              </li>
                              <li>
                              <button className="p-2 bg-slate-600" onClick={() => signIn("credentials")}>SignIn credentials Button</button>
                              </li>
          </ul>
    </nav>
  )
}

export default Navbar
