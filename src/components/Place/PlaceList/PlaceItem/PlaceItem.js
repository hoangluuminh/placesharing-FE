import React from 'react'
import styles from './PlaceItem.module.css'

import Card from '../../../shared/UI/Card/Card'
import Button from '../../../shared/Form/Button/Button'

const PlaceItem = props => {
  return (
    <li className={styles.PlaceItem}>
      <Card className={styles.content}>
        <div className={styles.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={styles.info}>
          <h2>{props.title}</h2>
          <h3>{props.address}</h3>
          <p>{props.description}</p>
        </div>
        <div className={styles.actions}>
          <Button inverse>VIEW ON MAP</Button>
          <Button to={`/places/${props.id}`}>EDIT</Button>
          <Button danger>DELETE</Button>
        </div>
      </Card>
    </li>
  )
}

export default PlaceItem
