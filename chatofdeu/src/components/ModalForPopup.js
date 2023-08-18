import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../css/ModalForPopup.css'



const ModalForPopup = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleModalClick = (event) => {
        // Check if the clicked element is the modal's outer container.
        // If so, close the modal.
        if (event.target.classList.contains('modal')) {
            closeModal();
        }
    };

    return (
        <div>
            <button onClick={openModal}>지도 보기</button>
            {isModalOpen && (
                <div className="modal" onClick={handleModalClick}>
                    <div className="modal-content">
                        <div className='modal-content-header'>
                            <h3 style={{ margin: 0 }}>
                                건물이름
                            </h3>
                            <div className='close-button-mother'>
                                <span className="close" onClick={closeModal}>x</span>
                            </div>
                        </div>

                        <img className='modal-content-img' src='/img/1.jpg' width={'100%'} />
                        <div className='modal-content-bottom'>
                            <h4 style={{ marginTop: "15px" }}>
                                건물 번호 : &nbsp;
                            </h4>
                            <h4 style={{ marginTop: "15px", color: "red" }}>
                                4
                            </h4>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ModalForPopup
