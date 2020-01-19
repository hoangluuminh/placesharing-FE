import React from 'react'
import styles from './UsersList.module.css'

import UserItem from './UserItem/UserItem'

const usersList = props => {
  return (
    props.items.length < 1 ? (
      <div className={['center'].join(' ')}>
        <h2>No users found</h2>
      </div>
    )
      : (
        <ul className={styles.UserList}>
          {props.items.map(user =>
            <UserItem
              key={user.id}
              id={user.id}
              image={user.image}
              name={user.name}
              placeCount={user.places.length}
            />)}
        </ul>
      )
  )
}

export default usersList
