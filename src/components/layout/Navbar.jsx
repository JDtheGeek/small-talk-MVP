import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar-fixed">
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <Link to='/' className='brand-logo'>Small Talk</Link>
          <ul className='right'>
            <li><NavLink to='/'>Sign Up</NavLink></li>
            <li><NavLink to='/'>Sign In</NavLink></li>
            <li><NavLink to='/'>New Article</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating green lighten-1'>NCT</NavLink></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar