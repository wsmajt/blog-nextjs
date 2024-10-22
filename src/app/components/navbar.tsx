import React from 'react'
import Link from "next/link";

const navbar = () => {
  return (
      <div className="navbar bg-base-100">
          <div className="flex-1">
              <a className="btn btn-ghost text-primary font-bold text-xl">Blog - Next.js</a>
              <ul className="menu menu-horizontal px-1 text-xl font-semibold">
                  <li>
                      <Link href="/">Link</Link>
                  </li>
                  <li>
                      <Link href="/">Link</Link>
                  </li>
                  <li>
                      <Link href="/">Link</Link>
                  </li>
              </ul>
          </div>
          <div className="flex-none">

          </div>
      </div>
  )
}

export default navbar