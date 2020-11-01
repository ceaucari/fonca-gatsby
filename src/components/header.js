import React from "react"
import { Link } from "gatsby"
import MainMenu from "./mainMenu"

export default function Header() {
  return (
    <header className="lg:px-16 px-6 bg-white flex flex-wrap items-center py-2">
      <div className="site-name flex-1 flex pointer-cursor">
        <Link to="/">
          <h1 className="inline-block font-cormorant text-4xl">
            The new old faces
          </h1>
        </Link>
      </div>
      <MainMenu />
    </header>
  )
}
