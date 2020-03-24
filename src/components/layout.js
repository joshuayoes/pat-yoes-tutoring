import React from "react"
import { rhythm } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  return (
    <>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built by
        {` `}
        <a href="https://joshuayoes.com">Joshua Yoes</a>
      </footer>
    </>
  )
}

export default Layout
