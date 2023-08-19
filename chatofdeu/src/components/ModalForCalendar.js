import React from 'react'
import '../css/ModalForCalendar.css'
import { useState } from 'react';

const ModalForCalendar = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
        console.log(props)
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleModalClick = (event) => {

        if (event.target.classList.contains('modal')) {
            closeModal();
        }
    };
    return (
        <>
            <button className='button' onClick={openModal}>{props.month[0]}</button>
            {isModalOpen && (
                <div className="modal" onClick={handleModalClick}>
                    <div className="modal-content">
                        <div className='modal-content-header'>
                            <h3 style={{ margin: 0 }}>
                                {props.month[0]}
                            </h3>
                            <div className='close-button-mother'>
                                <span className="close" onClick={closeModal}>x</span>
                            </div>
                        </div>


                        <div className='modal-content-bottom'>
                            {props.month.slice(1).map((i, index) => (
                                <div key={index}>{i}</div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
export default ModalForCalendar
