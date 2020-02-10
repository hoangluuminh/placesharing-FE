import React, { useCallback } from 'react'
import styles from './NewPlace.module.css'

import Input from '../../../components/shared/Form/Input/Input'
import { check } from '../../../utils/validators'

const NewPlace = () => {
  const handleTitleInput = useCallback((id, value, isValid) => {
    console.log('handleTitleInput')
  }, [])
  const handleDescriptionInput = useCallback((id, value, isValid) => {
    console.log('handleDescriptionInput')
  }, [])

  return (
    <form className={styles.placeForm}>
      <Input
        id='title'
        type='text'
        label='Title'
        validators={[check.REQUIRE()]}
        onInput={handleTitleInput}
        errorText='Required.'
      />
      <Input
        id='description'
        type='text'
        label='Description'
        validators={[check.MINLENGTH(5)]}
        onInput={handleDescriptionInput}
        errorText='Must be over 5 characters.'
      />
    </form>
  )
}

export default NewPlace
