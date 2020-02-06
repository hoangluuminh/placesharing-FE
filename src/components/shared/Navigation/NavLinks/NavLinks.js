import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './NavLinks.module.css'

const navLinks = props => {
  const currentUserId = 'u1' // DUMMY

  return (
    <ul className={styles.NavLinks}>
      <li><NavLink to='/' exact activeClassName={styles.active}>All Users</NavLink></li>
      <li><NavLink to={`/${currentUserId}/places`} activeClassName={styles.active}>My Places</NavLink></li>
      <li><NavLink to='/places/new' activeClassName={styles.active}>Add Place</NavLink></li>
      <li><NavLink to='/auth' activeClassName={styles.active}>Authenticate</NavLink></li>
    </ul>
  )
}

export default navLinks
