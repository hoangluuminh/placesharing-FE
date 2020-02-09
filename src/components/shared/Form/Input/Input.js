import React, { useReducer } from 'react'
import styles from './Input.module.css'

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE': {
      return {
        ...state,
        value: action.payload.value,
        isValid: true
      }
    }
    default: {
      return state
    }
  }
}

const Input = props => {
  const [inputState, dispatchInputChange] = useReducer(inputReducer, { value: '', isValid: false })

  const handleOnChange = event => {
    dispatchInputChange({ type: 'CHANGE', payload: { value: event.target.value } })
  }

  const element = props.element === 'textarea' ? (
    <textarea
      id={props.id}
      rows={props.rows || 3}
      onChange={handleOnChange}
      value={inputState.value}
    />
  ) : (
    <input
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      onChange={handleOnChange}
      value={inputState.value}
    />
  )

  return (
    <div className={[styles.formControl, (!inputState.isValid) ? styles.invalid : ''].join(' ')}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && <p>{props.errorText}</p>}
    </div>
  )
}

export default Input
