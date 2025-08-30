import React from 'react'
import {  NavLink } from 'react-router'

export default function Navbar() {
  return (
    
       <nav class="navbar">

<ul class="navbar-list">

  <li class="navbar-item">
    {/* <button class="navbar-link  active" data-nav-link>About</button> */}
    <NavLink to='/' className='navbar-link'>Home</NavLink>
  </li>

  <li class="navbar-item">
  <NavLink to='/Resume' className='navbar-link'>Resume</NavLink>
  </li>

  <li class="navbar-item">
  <NavLink to='/Portfolio' className='navbar-link'>Portfolio</NavLink>
  </li>

  <li class="navbar-item">
  <NavLink to='/Blog' className='navbar-link'>Blog</NavLink>
  </li>

  <li class="navbar-item">
  <NavLink to='/Contact' className='navbar-link'>Contact</NavLink>
  </li>

</ul>

</nav>
  
  )
}
