import React from "react"
import { Helmet } from "react-helmet"
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
    width: "100%",
  },
}

function MainLayout({ title, children }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="Description" content="Put your description here." />
        <title>{title}</title>
        <link rel="canonical" href="https://ceaucari.github.io/fonca-gatsby/" />
      </Helmet>
      <div style={styles.container}>
        <Header headerText={title} />
        <div style={styles.main}>
          <div className="sidebar-wrapper" style={styles.sidebar}>
            <Sidebar />
          </div>
          <div style={styles.mainContent}>{children}</div>
        </div>
      </div>
    </>
  )
}

export default MainLayout
