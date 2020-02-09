import React from 'react'
import styles from './NewPlace.module.css'

import Input from '../../../components/shared/Form/Input/Input'

const newPlace = () => {
  return (
    <form className={styles.placeForm}>
      <Input type='text' label='Title' />
    </form>
  )
}

export default newPlace
