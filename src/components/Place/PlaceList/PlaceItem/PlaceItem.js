import React, { useState } from 'react'
import styles from './PlaceItem.module.css'

import Card from '../../../shared/UI/Card/Card'
import Button from '../../../shared/Form/Button/Button'
import Modal from '../../../shared/UI/Modal/Modal'

const PlaceItem = props => {
  const [showMap, setShowMap] = useState(false)

  const handleShowMap = (bool) => {
    setShowMap((typeof bool === 'undefined') ? true : bool)
  }

  return (
    <>
      <Modal
        show={showMap}
        onCancel={() => handleShowMap(false)}
        header={props.address}
        contentClass={styles.modalContent}
        footerClass={styles.modalActions}
        footer={(<Button onClick={() => handleShowMap(false)}>CLOSE</Button>)}
      >
        <div className={styles.mapContainer}>
          <h2>THE MAP</h2>
        </div>
      </Modal>
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
            <Button inverse onClick={handleShowMap}>VIEW ON MAP</Button>
            <Button to={`/places/${props.id}`}>EDIT</Button>
            <Button danger>DELETE</Button>
          </div>
        </Card>
      </li>
    </>
  )
}

export default PlaceItem
