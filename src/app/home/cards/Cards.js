
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from "./style.module.css";
import create from "../../../../public/images/create.svg";
import held from "../../../../public/images/heldorders.png";
import salesreturn from "../../../../public/images/returnss.jpg";
import purchase from "../../../../public/images/purchase.png";
import update from "../../../../public/images/update.png";



const Cards = () => {

   

    return (
    <div className={styles.cardshome}>
        <div className={styles.card}>
            <Image src={create} alt='img' />
            <Link href="./salesorders"> Create Sales Order </Link>
            
        </div>
        <div className={styles.card}>
            <Image src={salesreturn} alt='img' />
            <Link href="./salesreturn">Create Sales Return</Link>
        </div>
        <div className={styles.card}>
            <Image src={purchase} alt='img' />
            <Link href="./purchaseorder">Create Purchase Order</Link>
        </div>
        <div className={styles.card}>
            <Image src={update} alt='img' />
            <Link href="./cardsinventory">Update Inventory</Link>
        </div>
        <div className={styles.card}>
            <Image src={held} alt='img' />
            <Link href="./cardsheldorders">View Held Orders</Link>
        </div>
    </div>
       
    )
}

export default Cards