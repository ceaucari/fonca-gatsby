import React from "react"
import { Link } from "gatsby"

const styles = {
  sidebar: {
    borderRight: "1px solid #cdcdcd",
  },
  link: {
    display: "block",
    marginBottom: "10px",
  },
}

export default function Sidebar() {
  return (
    <div className="sidebar" style={styles.sidebar}>
      <ul>
        <li>
          <Link style={styles.link} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link style={styles.link} to="/series/1">
            Series 1
          </Link>
        </li>
        <li>
          <Link style={styles.link} to="/series/2">
            Series 2
          </Link>
        </li>
      </ul>
    </div>
  )
}
