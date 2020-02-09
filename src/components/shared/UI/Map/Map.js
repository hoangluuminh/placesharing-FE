import React, { useEffect, useRef } from 'react'
import styles from './Map.module.css'

const Map = props => {
  const mapRef = useRef()
  const { center, zoom } = props

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, { center, zoom })
    const marker = new window.google.maps.Marker({ position: center, map: map })
  }, [center, zoom])

  return (
    <div
      ref={mapRef}
      className={[styles.Map, props.className].join(' ')}
      style={props.style}
    />
  )
}

export default Map
