

import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import remove from "../images/delete.png";

function Table() {
    return (
        <div className={styles.container}>

            <table className="table ms-4">
                <thead>
                    <tr>
                        <th scope="col">Medicine name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Brand</th>
                        <th scope="col">MRP</th>
                        <th scope="col">GST%</th>
                        <th scope="col">Discount</th>
                        <th scope="col">Total price</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td>Bayer AG</td>
                        <td>₹832</td>
                        <td>10</td>
                        <td>₹0</td>
                        <td>₹83200</td>
                        <td><Image src={remove} alt='img' /> </td>
                    </tr>
                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td>Bristol Myers Squibb Company</td>
                        <td>₹832</td>
                        <td>10</td>
                        <td>₹0</td>
                        <td>₹83200</td>
                        <td><Image src={remove} alt='img' /> </td>
                    </tr>
                    <tr className='table-secondary'>                   
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Total price</td>
                        <td>₹1032</td>                       
                    </tr>
                    <tr className='table-secondary'>                   
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Total discount:</td>
                        <td>₹0</td>                       
                    </tr>
                    <tr className='table-secondary'>                   
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><b>Payable price </b></td>
                        <td><b> ₹969.95 </b></td>                       
                    </tr>
                    
                </tbody>
            </table>


        </div>
    )
}

export default Table