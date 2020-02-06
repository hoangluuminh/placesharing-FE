import React from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import styles from './SideDrawer.module.css'
import slideInLeft from '../../../../styles/transitions/slideInLeft.module.css'

const sideDrawer = props => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames={slideInLeft}
      mountOnEnter
      unmountOnExit
    >
      <aside className={styles.SideDrawer} onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  )
  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'))
}

export default sideDrawer
