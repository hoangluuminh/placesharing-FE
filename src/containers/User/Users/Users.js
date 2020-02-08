import React from 'react'
// import styles from './Users.module.css'

import UsersList from '../../../components/User/UsersList/UsersList'

const users = () => {
  // DUMMY
  const USERS = [
    {
      id: '5e37133bdad119277c170fc5',
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
