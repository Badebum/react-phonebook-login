import React, {Component} from "react";
import styles from './Modal.module.css'
import {createPortal} from 'react-dom'



const modalRoot = document.querySelector('#modal-root')

export default class Modal extends Component {
    componentDidMount() {
       window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = e => {
        if(e.code === 'Escape'){
            this.props.onClose()
        }
    }

    handleBackdropClick = e =>{
        if(e.currentTarget === e.target){
            this.props.onClose()
        }
    }

    render () {
        return createPortal( <div className={styles.modal__backdrop} onClick={this.handleBackdropClick}>
            <div className={styles.modal__content}>{this.props.children}</div>
        </div>, modalRoot)
       
    }
}