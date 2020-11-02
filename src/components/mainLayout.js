import React from "react"
import { Helmet } from "react-helmet"
import Header from "./header"
import Footer from "./footer"

// STICKY FOOTER
const styles = {
  site: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
  },
  siteContent: {
    flexGrow: 1,
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

      <div className="wrapper" style={styles.site}>
        <Header headerText={title} />
        <div
          className="container content w-full py-4"
          style={styles.siteContent}
        >
          {children}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default MainLayout
