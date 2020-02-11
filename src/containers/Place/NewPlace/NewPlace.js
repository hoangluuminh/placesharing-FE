import React, { useReducer, useCallback } from 'react'
import styles from './NewPlace.module.css'

import Input from '../../../components/shared/Form/Input/Input'
import Button from '../../../components/shared/Form/Button/Button'
import { check } from '../../../utils/validators'

const NewPlace = () => {
  const formReducer = (state, action) => {
    switch (action.type) {
      case 'INPUT_CHANGE': {
        let formIsValid = true
        for (const inputId in state.inputs) {
          if (inputId === action.payload.inputId) {
            formIsValid = formIsValid && action.payload.isValid
          } else { // If inputId isnt the one being changed, use the old value
            formIsValid = formIsValid && state.inputs[inputId].isValid
          }
        }
        return {
          ...state,
          inputs: {
            ...state.inputs,
            [action.payload.inputId]: {
              value: action.payload.value,
              isValid: action.payload.isValid
            }
          },
          isValid: formIsValid
        }
      }
      default:
        return state
    }
  }
  const [formState, dispatchForm] = useReducer(formReducer, {
    inputs: {
      title: { value: '', isValid: false },
      description: { value: '', isValid: false },
      address: { value: '', isValid: false }
    },
    isValid: false
  })

  const handleInput = useCallback((id, value, isValid) => {
    dispatchForm({ type: 'INPUT_CHANGE', payload: { value, isValid, inputId: id } })
  }, [])

  const handlePlaceSubmit = event => {
    event.preventDefault()
    console.log(formState.inputs) // TODO: Send it to the backend
  }

  return (
    <form className={styles.placeForm} onSubmit={handlePlaceSubmit}>
      <Input
        id='title'
        label='Title'
        validators={[check.REQUIRE()]}
        onInput={handleInput}
        errorText='Required.'
      />
      <Input
        id='description'
        element='textarea'
        label='Description'
        validators={[check.MINLENGTH(5)]}
        onInput={handleInput}
        errorText='Must be at least 5 characters.'
      />
      <Input
        id='address'
        label='Address'
        validators={[check.REQUIRE()]}
        onInput={handleInput}
        errorText='Required.'
      />
      <Button type='submit' disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  )
}

export default NewPlace
