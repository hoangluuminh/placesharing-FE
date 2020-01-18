import React from 'react'
import styles from './UserItem.module.css'

const userItem = props => {
  return (
    <li className={styles.UserItem}>
      <div className={styles.UserItem__content}>
        <div className={styles.UserItem__image}>
          <img src={props.image} alt={props.name} />
        </div>
        <div className={styles.UserItem__info}>
          <h2>{props.name}</h2>
          <h3>{props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}</h3>
        </div>
      </div>
    </li>
  )
}

export default userItem
