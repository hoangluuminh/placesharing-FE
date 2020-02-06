import React from 'react'
import styles from './MainHeader.module.css'

const mainHeader = props => {
  return (
    <header className={styles.MainHeader}>
      {props.children}
    </header>
  )
}

export default mainHeader
