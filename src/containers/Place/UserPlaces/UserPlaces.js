import React from 'react'
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
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg',
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
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg',
      creator: '5e37133bdad119277c170fc5'
    }
  ]

  return (
    <PlaceList items={PLACES} />
  )
}

export default UserPlaces
