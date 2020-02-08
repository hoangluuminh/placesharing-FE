import React from 'react'
import styles from './PlaceList.module.css'

import PlaceItem from './PlaceItem/PlaceItem'
import stylesGeneral from '../../../styles/general.module.css'
import Card from '../../shared/UI/Card/Card'

const PlaceList = props => {
  return (
    props.items.length < 1 ? (
      <div className={[styles.PlaceList, stylesGeneral.center].join(' ')}>
        <Card>
          <h2>No places found</h2>
          <button>Share Place</button>
        </Card>
      </div>
    )
      : (
        <ul className={styles.PlaceList}>
          {props.items.map(place =>
            <PlaceItem
              key={place.id}
              id={place.id}
              image={place.image}
              title={place.title}
              address={place.address}
              description={place.description}
              location={place.location}
            />)}
        </ul>
      )
  )
}

export default PlaceList
