import React from 'react'
import { useParams } from 'react-router-dom'
// import styles from './UpdatePlace.module.css'

import stylesGeneral from '../../../styles/general.module.css'
import stylesForm from '../../../styles/form.module.css'
import Input from '../../../components/shared/Form/Input/Input'
import Button from '../../../components/shared/Form/Button/Button'
import { check } from '../../../utils/validators'

const UpdatePlace = () => {
  const PLACES = [
    {
      id: 'p1',
      title: 'Empire State Building',
      description: 'Fake sky scraper',
      address: '20 W 34th St, New York, NY 10001',
      location: {
        lat: 40.7484405,
        lng: -73.9856644
      },
      image: 'https://content.tripster.com/travelguide/wp-content/uploads/2017/09/Dropbox_Empire-State-ThinkstockPhotos-486334510-med-2-750x450.jpg',
      creator: '5e37133bdad119277c170fc5'
    },
    {
      id: 'p2',
      title: 'Empire State Building',
      description: 'Fake sky scraper',
      address: '20 W 34th St, New York, NY 10001',
      location: {
        lat: 40.7484405,
        lng: -73.9856644
      },
      image: 'https://content.tripster.com/travelguide/wp-content/uploads/2017/09/Dropbox_Empire-State-ThinkstockPhotos-486334510-med-2-750x450.jpg',
      creator: '5e37133bdad119277c170fc5'
    }
  ]

  const placeId = useParams().placeId
  const identifiedPlace = PLACES.find(p => p.id === placeId)

  if (!identifiedPlace) {
    return (
      <h2 className={stylesGeneral.center}>Place not found.</h2>
    )
  }
  return (
    <form className={stylesForm.placeForm}>
      <Input
        id='title'
        label='Title'
        type='text'
        validators={[check.REQUIRE()]}
        onInput={() => {}}
        errorText='Required.'
        value={identifiedPlace.title}
        valid
      />
      <Input
        id='description'
        label='Description'
        element='textarea'
        validators={[check.MINLENGTH(5)]}
        onInput={() => {}}
        errorText='Must be at least 5 characters.'
        value={identifiedPlace.description}
        valid
      />
      <Button type='submit' disabled>
        UPDATE PLACE
      </Button>
    </form>
  )
}

export default UpdatePlace
