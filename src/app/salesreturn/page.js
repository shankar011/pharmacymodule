"use client"
import React from 'react';
import styles from "./style.module.css";
import NavBar from './topnav/NavBar';
import arrow from "./images/leftarrow.png"
import Image from 'next/image';
import Inputs from './inputs/Inputs';
import Table from './ordertable/Table';
import Customer from './customerdetails/Customer';

const page = () => {




    return (
        <div >
            <div className={styles.container}>
                <NavBar />
                <hr/>
                <div className={styles.return}>
                    <span><Image height={15} src={arrow} alt="img" />  Create sales return order </span>
                </div>
                <Inputs />

                <div className={styles.cart}>
                    Order Details
                </div>
                <Table />
                <Customer />
               
            </div>
            <div className={styles.bottom}>
                    <button>Return order</button>
            </div>
        </div>
    )
}

export default page