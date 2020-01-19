import React from 'react'

import styles from './Avatar.module.css'

const avatar = props => {
  return (
    <div className={[styles.Avatar, props.className].join(' ')} style={props.style}>
      <img
        src={props.image}
        alt={props.alt}
        style={{
          width: props.width,
          height: props.width
        }}
      />
    </div>
  )
}

export default avatar
