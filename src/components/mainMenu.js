import React from "react"
import { Link } from "gatsby"
import IconHamburger from "./../images/svgs/hamburger.svg"

export default function MainMenu() {
  const links = [
    {
      text: "Series 1",
      route: "/series/1",
    },
    {
      text: "Series 2",
      route: "/series/2",
    },
    {
      text: "Gallery",
      route: "/gallery",
    },
  ]
  return (
    <>
      <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block">
        <IconHamburger />
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />

      <div
        className="hidden lg:flex lg:items-center lg:w-auto w-full"
        id="menu"
      >
        <nav className="inline-block main-menu">
          <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.route}
                className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
              >
                {link.text}
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}
