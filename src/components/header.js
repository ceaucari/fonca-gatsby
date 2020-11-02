import React from "react"
import { Link } from "gatsby"
import MainMenu from "./mainMenu"

export default function Header() {
  return (
    <header className="border-b border-gray-200 box-border">
      <div className="container">
        <div className="flex flex-wrap items-center lg:h-24">
          <div className="site-name flex-1 flex pointer-cursor">
            <Link to="/">
              <h1 className="h-24 flex items-center font-cormorant text-4xl">
                The new old faces
              </h1>
            </Link>
          </div>
          <MainMenu />
        </div>
      </div>
    </header>
  )
}
