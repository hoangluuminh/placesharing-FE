import React from 'react'
import styles from './Input.module.css'

const Input = props => {
  const element = props.element === 'textarea' ? (
    <textarea id={props.id} rows={props.rows || 3} />
  ) : (
    <input id={props.id} type={props.type} placeholder={props.placeholder} />
  )

  return (
    <div className={[styles.formControl].join(' ')}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
    </div>
  )
}

export default Input
