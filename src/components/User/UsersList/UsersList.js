import React from 'react'
import styles from './UsersList.module.css'

import UserItem from './UserItem/UserItem'

const usersList = props => {
  return (
    <div className={styles.UsersList}>
      {props.items.length < 1 && (
        <div className={['center'].join(' ')}>
          <h2>No users found</h2>
        </div>
      )}
      {props.items.length >= 1 &&
        <ul>
          {props.items.map(user =>
            <UserItem
              key={user.id}
              id={user.id}
              image={user.image}
              name={user.name}
              placeCount={user.places.length}
            />)}
        </ul>}
    </div>
  )
}

export default usersList
