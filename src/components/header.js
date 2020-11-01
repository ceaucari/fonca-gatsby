import React from "react"

const styles = {
  header: {
    color: "purple",
    fontSize: "72px",
  },
}

export default function Header(props) {
  // return <h1 style={styles.header}>The new old faces</h1>
  return <h1 style={styles.header}>{props.headerText}</h1>
}
