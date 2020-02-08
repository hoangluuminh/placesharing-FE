import React from 'react'
import { useParams } from 'react-router-dom'
// import styles from './UserPlaces.module.css'

import PlaceList from '../../../components/Place/PlaceList/PlaceList'

const UserPlaces = props => {
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
  const userId = useParams().userId
  const filteredPlaces = PLACES.filter(place => place.creator === userId)

  return (
    <PlaceList items={filteredPlaces} />
  )
}

export default UserPlaces
