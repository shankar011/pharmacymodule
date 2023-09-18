"use client"
import { useState } from 'react';
import React from 'react'
import NavBar from './topnav/NavBar';
import styles from "./style.module.css";
import Image from 'next/image';
import Inputs from './inputs/Inputs';
import Table from './inventorytable/Table';
import remove from "./images/remove.png";


const page = () => {

    const [showMessage, setShowMessage] = useState(false);

    const handleButtonClick = () => {
        setShowMessage(true);
    };

    const closeModal = () => {
        setShowMessage(false);
    };

    return (
        <div className={styles.container}>
            <NavBar />
            <hr />
            <div className={styles.return}>
                <h1>Inventory</h1>
                <button onClick={handleButtonClick}>Update inventory</button>
            </div>
            
            <Inputs />
            <Table />
            {showMessage && (
                <div className={styles.modal}>
                    <div className={styles.modal_content}>
                        <Image onClick={closeModal} src={remove} />
                        <p><span> Thank you! </span> <br />  Our team will review your order and will contact you soon.</p>
                    </div>
                </div>
            )}
        </div>
    )
}



export default page;





