import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './NavLinks.module.css'

const navLinks = props => {
  const currentUserId = 'u1' // DUMMY

  return (
    <ul className={styles.NavLinks}>
      <li><NavLink to='/' exact>All Users</NavLink></li>
      <li><NavLink to={`/${currentUserId}/places`}>My Places</NavLink></li>
      <li><NavLink to='/places/new'>Add Place</NavLink></li>
      <li><NavLink to='/auth'>Authenticate</NavLink></li>
    </ul>
  )
}

export default navLinks
