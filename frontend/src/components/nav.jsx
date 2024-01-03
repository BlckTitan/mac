import React from 'react'
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="fixed top-0 z-10 w-full h-fit p-4 xl:py-6 px-12 bg-regal-blue xl:text-xl xl:font text-white">
        <ul className="flex flex-col xl:flex-row xl:justify-between">
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
    </nav>
  )
}