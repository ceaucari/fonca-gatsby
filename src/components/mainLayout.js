import React from "react"
import { Helmet } from "react-helmet"
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
      <Header headerText={title} />
      <div className="container">
        <div className="flex mx-1">
          <div className="w-full mb-20">{children}</div>
        </div>
      </div>
    </>
  )
}

export default MainLayout
