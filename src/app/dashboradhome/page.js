import React from 'react';
import styles from "./style.module.css";
import pharmabg from "../../../public/images/pharmacybg.png"
import bell from "../../../public/images/bell.png";
import signin from "../../../public/images/signIn.png";
import Image from 'next/image';
import dawamobile from "../../../public/images/dawamobilelogo.png";
import menu from "../../../public/images/humberger.png";


const DashboardHome = () => {
  return (
   <div>
      <div className={styles.mobileview}>
        <Image src={dawamobile} alt="img"/>
        <Image src={menu} width={33} height={23} alt='img' />
      </div>

     <div className={styles.manage}>
      
      <nav className='d-flex justify-content-between'>
        <div>
          <p>Hello John Doe!</p>
          
        </div>

        <div className={styles.mobile}>
          <span className='me-4'> <Image src={bell} /> </span>
          <span > <Image src={signin} /> </span>
        </div>
      </nav>

      <div className={styles.stores}>
        <p>Manage your stores</p>
        <button>Add Stores</button>
      </div>

      <div className={styles.pharmabg}>
        <Image style={{backgroundColor:"#f5f2f2", width:"100%"}} src={pharmabg} />
      </div>
      <div className={styles.skip}>
        <button>Skip for now</button>
     </div>
   
  </div>
   </div>
   
  )
}

export default  DashboardHome;