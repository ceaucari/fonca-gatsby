import React from "react"
import { Helmet } from "react-helmet"
import Sidebar from "./sidebar"
import Header from "./header"

function MainLayout({ title, children }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="Description" content="Put your description here." />
        <title>{title}</title>
        <link rel="canonical" href="https://ceaucari.github.io/fonca-gatsby/" />
      </Helmet>
      <div className="container">
        <Header headerText={title} />
        <div className="flex mx-1">
          <div className="w-40">
            <Sidebar />
          </div>
          <div className="w-full">{children}</div>
        </div>
      </div>
    </>
  )
}

export default MainLayout
