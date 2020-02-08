import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Button.module.css'

const Button = props => {
  const buttonStyles = [
    styles.Button,
    styles[props.size || 'default'],
    props.inverse ? styles.inverse : '',
    props.danger ? styles.danger : ''
  ].join(' ')
  // External Link
  if (props.href) {
    return (
      <a
        className={buttonStyles}
        href={props.href}
      >
        {props.children}
      </a>
    )
  }
  // Link
  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
        className={buttonStyles}
      >
        {props.children}
      </Link>
    )
  }
  return (
    <button
      className={buttonStyles}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
}

export default Button
