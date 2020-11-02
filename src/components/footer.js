import React from "react"
import { Link } from "gatsby"
import MainMenu from "./mainMenu"

export default function Footer() {
  return (
    <footer className="footer border-t border-gray-200 box-border">
      <div className="container">
        <div className="flex flex-wrap items-center lg:h-24">
          <div className="site-name flex-1 flex pointer-cursor">
            <Link to="/">
              <div className="h-24 flex items-center">Footer links</div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
