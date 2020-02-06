import React from 'react'
import ReactDOM from 'react-dom'
import styles from './SideDrawer.module.css'

const sideDrawer = props => {
  const content = (
    <aside className={styles.SideDrawer}>
      {props.children}
    </aside>
  )
  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'))
}

export default sideDrawer
