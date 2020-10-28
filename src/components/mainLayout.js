import React from "react"
import Sidebar from "./sidebar"
import Header from "./header"

const styles = {
  container: {
    margin: "0 auto",
    maxWidth: "800px",
  },
  main: {
    display: "flex",
  },
  sidebar: {
    width: "200px",
  },
  mainContent: {
    marginLeft: "30px",
  },
}

function MainLayout({ children }) {
  return (
    <div style={styles.container}>
      <Header headerText="The new old faces" />
      <div style={styles.main}>
        <div className="sidebar-wrapper" style={styles.sidebar}>
          <Sidebar />
        </div>
        <div style={styles.mainContent}>{children}</div>
      </div>
    </div>
  )
}

export default MainLayout
