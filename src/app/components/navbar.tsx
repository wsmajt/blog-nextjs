import React from 'react'
import Logo from '../assets/smajtLogo.svg';
import Image from "next/image";
import Link from "next/link";
import {LogOut, UserRound} from "lucide-react";

import { getCurrentSession } from '@/lib/server/sessions';

const navbar = async () => {
    const { user } = await getCurrentSession();

    return (
      <div className="navbar bg-base-100">
          <div className="navbar-start gap-2">
              <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 6h16M4 12h8m-8 6h16"/>
                      </svg>
                  </div>
                  <ul
                      tabIndex={0}
                      className="menu menu-lg dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold text-2xl">
                      <li><Link href="/posts">Posts</Link></li>
                      <li><Link href="/archive">Archive</Link></li>
                      <li><Link href="/about">About</Link></li>
                  </ul>
              </div>
              <Link href="/" className="btn btn-ghost font-bold text-2xl">
                  <Image src={Logo} alt="SmajtLogo" className="h-18 w-8"/>
                  <p className="">Blog - </p>
                  <p className="text-primary">Next.js</p>
              </Link>
              <div className="rounded-full border border-base-content p-2 lg:hidden">
                  {!user && <Link href="/login"><UserRound className="w-6 h-6"/></Link> }
                  {user && <Link href="/api/logout"><LogOut className="w-6 h-6"/></Link> }
              </div>
          </div>
          <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 font-semibold text-2xl">
                  <li><Link href="/posts">Posts</Link></li>
                  <li><Link href="/archive">Archive</Link></li>
                  <li><Link href="/about">About</Link></li>
              </ul>
          </div>
          <div className="navbar-end hidden lg:inline-flex">
              <div className="rounded-full border-base-content border p-2">
                  {!user && <Link href="/login"><UserRound className="w-6 h-6"/></Link> }
                  {user && <Link href="/api/logout"><LogOut className="w-6 h-6"/></Link> }
              </div>
          </div>
      </div>
  )
}

export default navbar