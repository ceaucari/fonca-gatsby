import React, { useState } from "react"
import { Link } from "gatsby"
import "hamburgers/dist/hamburgers.css"

export default function Header() {
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

  const renderMenuDesktop = () => (
    <nav className="main-menu hidden lg:flex items-center">
      <ul className="flex items-center">
        {links.map((link, index) => (
          <li key={index} className="mx-2">
            <Link
              to={link.route}
              activeClassName="active border-indigo-400"
              className="h-24 flex items-center p-4 py-3 px-2 border-b-2 border-transparent hover:border-indigo-400"
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )

  const renderMenuMobile = () => (
    <nav
      className={`${
        !isActive && `hidden`
      } main-menu-mobile lg:hidden w-full bg-gray-100 py-2`}
    >
      <div className="container">
        <ul className="items-center">
          {links.map((link, index) => (
            <li key={index} className="hover:bg-gray-300">
              <Link to={link.route} className="flex p-2">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )

  const renderHamburguer = () => (
    <div className="pointer-cursor lg:hidden block">
      <button
        onClick={() => setIsActive(!isActive)}
        className={`hamburger hamburger--squeeze ${isActive && `is-active`}`}
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </div>
  )

  return (
    <header className="border-b border-gray-200">
      <div className="container flex flex-wrap items-center lg:h-24">
        <div className="site-name flex-1 flex pointer-cursor">
          <Link to="/">
            <h1 className="h-24 flex items-center font-cormorant text-4xl">
              The new old faces
            </h1>
          </Link>
        </div>
        {renderMenuDesktop()}
        {renderHamburguer()}
      </div>
      {renderMenuMobile()}
    </header>
  )
}
