import React from 'react'
import { Link } from 'react-router-dom'
import styles from './MainNavigation.module.css'

import MainHeader from '../MainHeader/MainHeader'
import NavLinks from '../NavLinks/NavLinks'

const mainNavigation = props => {
  const APP_NAME = 'Place Sharing'
  return (
    <MainHeader>
      <button className={styles.menuBtn}>
        <span />
        <span />
        <span />
      </button>
      <h1 className={styles.title}>
        <Link to='/'>{APP_NAME}</Link>
      </h1>
      <nav>
        <NavLinks />
      </nav>
    </MainHeader>
  )
}

export default mainNavigation
