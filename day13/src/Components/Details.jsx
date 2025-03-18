import React from 'react'
import { Outlet,Link } from 'react-router'
const Details = () => {
  return (
    <div>

      <nav>
        <Link to="Hello">Hello</Link>
        <Link to="Hi">Hi</Link>
      </nav>
      <h1>Welcome to details page</h1>
      <Outlet></Outlet>
    </div>
  )
}

export default Details
