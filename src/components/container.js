import React from "react"

const styles = {
  container: {
    margin: "0 auto",
    maxWidth: "600px",
  },
}

export default function Container({ children }) {
  return <div style={styles.container}>{children}</div>
}
