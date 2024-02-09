import * as React from 'react'
import { Link } from 'gatsby'
import { container } from './layout.module.css'

//this is where all things should go that are true for all pages like the heading naviation bar

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout