import React from 'react'
import ReactDOM from 'react-dom'

import styles from './Modal.module.css'
import modalInOut from '../../../../styles/transitions/modalInOut.module.css'

import Backdrop from '../Backdrop/Backdrop'
import { CSSTransition } from 'react-transition-group'

const ModalOverlay = props => {
  const content = (
    <div
      className={[styles.Modal, props.className].join(' ')}
      style={props.style}
    >
      <header className={[styles.header, props.headerClass].join(' ')}>
        <h2>{props.header}</h2>
      </header>
      <form onSubmit={props.onSubmit ? props.onSubmit : event => event.preventDefault()}>
        <div className={[styles.content, props.contentClass].join(' ')}>
          {props.children}
        </div>
        <footer className={[styles.footer, props.footerClass].join(' ')}>
          {props.footer}
        </footer>
      </form>
    </div>
  )
  return ReactDOM.createPortal(content, document.getElementById('modal-hook'))
}

const Modal = props => {
  return (
    <>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        timeout={200}
        classNames={modalInOut}
        mountOnEnter
        unmountOnExit
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  )
}

export default Modal
