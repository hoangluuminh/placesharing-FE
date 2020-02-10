import React, { useEffect, useReducer } from 'react'
import styles from './Input.module.css'

import { validate } from '../../../../utils/validators'

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE': {
      return {
        ...state,
        value: action.payload.value,
        isValid: validate(action.payload.value, action.payload.validators)
      }
    }
    case 'TOUCH': {
      return {
        ...state,
        isTouched: true
      }
    }
    default: {
      return state
    }
  }
}

const Input = props => {
  const [inputState, dispatchInput] = useReducer(inputReducer, { value: '', isValid: false, isTouched: false })

  const { id, onInput } = props
  const { value, isValid } = inputState
  useEffect(() => {
    onInput(id, value, isValid)
  }, [id, onInput, value, isValid])

  const handleOnChange = event => {
    dispatchInput({
      type: 'CHANGE',
      payload: { value: event.target.value, validators: props.validators }
    })
  }

  const handleTouch = () => {
    dispatchInput({ type: 'TOUCH' })
  }

  const element = props.element === 'textarea' ? (
    <textarea
      id={props.id}
      rows={props.rows || 3}
      onChange={handleOnChange}
      onBlur={handleTouch}
      value={inputState.value}
    />
  ) : (
    <input
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      onChange={handleOnChange}
      onBlur={handleTouch}
      value={inputState.value}
    />
  )

  return (
    <div className={[styles.formControl, (inputState.isTouched && !inputState.isValid) ? styles.invalid : ''].join(' ')}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {(inputState.isTouched && !inputState.isValid) && <p>{props.errorText}</p>}
    </div>
  )
}

export default Input
