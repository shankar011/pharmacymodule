// components/Sidebar.js
import React from 'react';
import Link from 'next/link';
import styles from './sidebar.module.css';
import Image from 'next/image';
import logo from "../../../public/images/dawaa.png";
import store from "../../../public/images/store.png";
import home from "../../../public/images/home.png";
import inventory from "../../../public/images/inventary.png";
import report from "../../../public/images/report.png";
import person from "../../../public/images/person.png";
import location from "../../../public/images/location.png";
import setting from "../../../public/images/setting.png";
import leave from "../../../public/images/leave.png";

const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <Image src={logo} alt='img' />
      <ul>
        <li>
          <Link href="./stores"> <span> <Image src={store} width={21} height={21} /></span> Manage your stores</Link>
        </li>
        <li>
          <Link href="./home"> <span><Image src={home} width={21} height={21} /> </span> Home</Link>
        </li>
        <li>
          <Link href="/dashboard/inventory"><span><Image src={inventory} /> </span> Inventory</Link>
        </li>
        <li>
          <Link href="/dashboard/reports"> <span><Image src={report} /> </span> View Reports</Link>
        </li>
        <li>
          <span><Image src={person} /> </span>
          <select className={styles.options}>
            <option value="/dashboard/profile">My Profile</option>
          </select>
        </li>
        <li>
          <Link href="./orders"><span><Image src={location} /> </span> Track Purchase Order</Link>
        </li>
      </ul>
      <div className={styles.bottom}>
        <ul>
          <li>
            <Link href="/setting"><span><Image src={setting} /> </span>Setting</Link>
          </li>
          <li className={styles.logout}>
            <Link className='text-danger' href="/logout"><span><Image src={leave} /> </span>Logout Account</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
