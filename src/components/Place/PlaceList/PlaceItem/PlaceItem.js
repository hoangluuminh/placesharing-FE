import React from 'react'
import styles from './PlaceItem.module.css'

import Card from '../../../shared/UI/Card/Card'

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
          <button>VIEW ON MAP</button>
          <button>EDIT</button>
          <button>DELETE</button>
        </div>
      </Card>
    </li>
  )
}

export default PlaceItem
