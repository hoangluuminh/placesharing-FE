import React from 'react'
// import styles from './Users.module.css'

import UsersList from '../../../components/User/UsersList/UsersList'

const users = () => {
  // DUMMY
  const USERS = [
    {
      id: 'u1',
      name: 'Hoang',
      image: 'https://img.icons8.com/nolan/2x/react-native.png',
      places: [{}, {}, {}]
    }
  ]

  return (
    <UsersList items={USERS} />
  )
}

export default users
