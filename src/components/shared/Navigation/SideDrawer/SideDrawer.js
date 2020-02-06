import React from 'react'
import styles from './SideDrawer.module.css'

const sideDrawer = props => {
  return (
    <aside className={styles.SideDrawer}>
      {props.children}
    </aside>
  )
}

export default sideDrawer
