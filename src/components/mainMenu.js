import React, { useState } from "react"
import { Link } from "gatsby"
import IconHamburger from "./../images/svgs/hamburger.svg"
import "hamburgers/dist/hamburgers.css"

export default function MainMenu() {
  const [isActive, setIsActive] = useState(false)

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
      <div className="pointer-cursor lg:hidden block">
        <button
          onClick={() => setIsActive(!isActive)}
          class={`hamburger hamburger--squeeze ${isActive && `is-active`}`}
          type="button"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>

      <nav
        className={`${
          !isActive && `hidden`
        } main-menu lg:flex lg:items-center lg:w-auto w-full`}
      >
        <ul className="lg:flex items-center justify-between text-base text-gray-700">
          {links.map((link, index) => (
            <li key={index} className="lg:min-h-20">
              <Link
                to={link.route}
                className="lg:h-24 flex items-center lg:p-4 py-3 px-2 border-b-2 border-transparent lg:hover:border-indigo-400 hover:bg-gray-300 lg:hover:bg-transparent"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
