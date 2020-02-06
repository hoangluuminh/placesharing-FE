import React from 'react'
import styles from './UsersList.module.css'

import UserItem from './UserItem/UserItem'
import Card from '../../shared/UI/Card/Card'

const usersList = props => {
  return (
    props.items.length < 1 ? (
      <div className={['center'].join(' ')}>
        <Card>
          <h2>No users found</h2>
        </Card>
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
