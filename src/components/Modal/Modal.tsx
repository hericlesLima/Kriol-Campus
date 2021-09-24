
import React, { useState } from 'react'

import Modal from 'react-modal';
import './modal.scss'



Modal.setAppElement('#root');

function Modals(props:{children: JSX.Element[] | JSX.Element, openModal:boolean,closeModal:any}) {

 
    return (
        <Modal 
            isOpen={props.openModal}
            onRequestClose={props.closeModal} 
            className="Modal"
            overlayClassName="Overlay"     
        >
            {props.children}

           
        </Modal>
    )
}

export default Modals
 