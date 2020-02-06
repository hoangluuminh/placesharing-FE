import React from 'react'
import ReactDOM from 'react-dom'
import styles from './Backdrop.module.css'

const Backdrop = props => {
  return ReactDOM.createPortal(
    <div className={styles.Backdrop} onClick={props.onClick} />,
    document.getElementById('backdrop-hook')
  )
}

export default Backdrop
