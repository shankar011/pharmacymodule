import React from 'react'
import styles from "./style.module.css";
import NavBar from './topnav/NavBar'
import Cards from './cards/Cards';
import Table from './tables/Table';

const page = () => {
    return (
        <div className={styles.container}>
            <NavBar />
            <hr />
            <div className={styles.reoprts}>
                <p>View reports</p>
                
                    <select>
                        <option>Select Store</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                  <div className='d-flex'>
                    <button>Today</button>
                    <button>This week</button>
                    <button>This month</button>
                    <button>Last 6 months</button>
                    <button style={{backgroundColor:"#EDEDFF", color:" #7F82FF"}}>This year</button>     
                    </div>                 
            </div>
            <Cards />
            <Table />
        </div>
    )
}

export default page