import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './MainNavigation.module.css'

import MainHeader from '../MainHeader/MainHeader'
import NavLinks from '../NavLinks/NavLinks'
import SideDrawer from '../SideDrawer/SideDrawer'
import Backdrop from '../../UI/Backdrop/Backdrop'

const MainNavigation = props => {
  const APP_NAME = 'Place Sharing'

  const [drawerIsOpen, setDrawerIsOpen] = useState(false)

  const handleDrawerToggle = () => {
    setDrawerIsOpen((prevState) => !prevState)
  }

  return (
    <>
      {!drawerIsOpen ? null : (<Backdrop onClick={handleDrawerToggle} />)}
      <SideDrawer show={drawerIsOpen} onClick={handleDrawerToggle}>
        <nav className={styles.drawerNav}>
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button
          className={styles.menuBtn}
          onClick={handleDrawerToggle}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className={styles.title}>
          <Link to='/'>{APP_NAME}</Link>
        </h1>
        <nav className={styles.headerNav}>
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  )
}

export default MainNavigation
