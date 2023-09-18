

import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import edit from "../images/edit.png";

function Table() {
    return (
        <div className={styles.container}>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Invoice no.</th>
                        <th scope="col">Medicine</th>
                        <th scope="col">Mobile number</th>
                        <th scope="col">Customer name</th>
                        <th scope="col">Action</th>
                       

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>04-05-2023</td>
                        <td>Inv001</td>
                        <td>Synthroid</td>
                        <td>9455575237</td>
                        <td>Annette Black</td>
                        <td><Image src={edit} alt='img' /> </td>
                    </tr>
                    <tr>
                        <td>04-05-2023</td>
                        <td>Inv002</td>
                        <td>Pepto-Bismol</td>
                        <td>7555713647</td>
                        <td>Ralph Edwards</td>
                        <td><Image src={edit} alt='img' /> </td>
                    </tr>
                    <tr>                   
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Discount provided:</td>
                        <td>₹300</td>                       
                    </tr>
                    <tr >                   
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Previous total:</td>
                        <td>₹1028</td>            
                    </tr>
                    <tr>                   
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Suggested return amount:</td>
                        <td>₹516</td>                        
                    </tr>
                    <tr>                   
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><b>Actual return amount:</b></td>
                        <td><input type='number' placeholder='Enter amount' /></td>                        
                    </tr>
                    
                </tbody>
            </table>


        </div>
    )
}

export default Table