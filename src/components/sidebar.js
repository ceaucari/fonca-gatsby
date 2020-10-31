import React from "react"
import { Link } from "gatsby"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li className="block mb-2">
          <Link to="/">Home</Link>
        </li>
        <li className="block mb-2">
          <Link to="/series/1">Series 1</Link>
        </li>
        <li className="block mb-2">
          <Link to="/series/2">Series 2</Link>
        </li>
      </ul>
    </div>
  )
}
