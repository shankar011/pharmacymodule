import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import file from "../images/file.png";
import remove from "../images/remove.png";
import dright from "../images/dright.png";
import sright from "../images/sright.png";
import dleft from "../images/dleft.png";
import sleft from "../images/sleft.png";




const HeldOrders = () => {
  return (
    <div className={styles.container}>
       
        <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Order ID</th>
                        <th scope="col">Timestamp</th>
                        <th scope="col">No of medicines</th>
                        <th scope="col">Top medicine</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ORD#1562792776427 - 28</td>
                        <td>04-09-23 12:34PM</td>
                        <td>100</td>
                        <td>&#8377;832</td>
                        <td><span><Image src={file} alt='img' /> </span><span className='ms-3'><Image src={remove} alt='img' /> </span> </td>
                    </tr>
                    <tr>
                        <td>ORD#1562792776427 - 28</td>
                        <td>04-09-23 12:34PM</td>
                        <td>100</td>
                        <td>&#8377;832</td>
                        <td><span><Image src={file} alt='img' /> </span><span className='ms-3'><Image src={remove} alt='img' /> </span> </td>
                    </tr>
                    <tr>
                        <td>ORD#1562792776427 - 28</td>
                        <td>04-09-23 12:34PM</td>
                        <td>100</td>
                        <td>&#8377;832</td>
                        <td><span><Image src={file} alt='img' /> </span><span className='ms-3'><Image src={remove} alt='img' /> </span> </td>
                    </tr>
                    <tr>
                        <td>ORD#1562792776427 - 28</td>
                        <td>04-09-23 12:34PM</td>
                        <td>100</td>
                        <td>&#8377;832</td>
                        <td><span><Image src={file} alt='img' /> </span><span className='ms-3'><Image src={remove} alt='img' /> </span> </td>
                    </tr>
                    <tr>
                        <td>ORD#1562792776427 - 28</td>
                        <td>04-09-23 12:34PM</td>
                        <td>100</td>
                        <td>&#8377;832</td>
                        <td><span><Image src={file} alt='img' /> </span><span className='ms-3'><Image src={remove} alt='img' /> </span> </td>
                    </tr>
                    <tr>
                        <td>ORD#1562792776427 - 28</td>
                        <td>04-09-23 12:34PM</td>
                        <td>100</td>
                        <td>&#8377;832</td>
                        <td><span><Image src={file} alt='img' /> </span><span className='ms-3'><Image src={remove} alt='img' /> </span> </td>
                    </tr>
                    <tr>
                        <td>ORD#1562792776427 - 28</td>
                        <td>04-09-23 12:34PM</td>
                        <td>100</td>
                        <td>&#8377;832</td>
                        <td><span><Image src={file} alt='img' /> </span><span className='ms-3'><Image src={remove} alt='img' /> </span> </td>
                    </tr>
                                 
                </tbody>
            </table>

            <div className={styles.bottom}>
                <span>1</span>
                <span>-</span>
                <span>50</span>
                <span className='ms-2'>off</span>
                <span className='ms-2'>650</span>
                <span className='ms-4'><Image src={dleft} alt='img' /></span>
                <span className='ms-4'><Image src={sleft} alt='img' /></span>
                <span className='ms-4'><Image src={sright} alt='img' /></span>
                <span className='ms-4'><Image src={dright} alt='img' /></span>   
            </div>

    </div>
  )
}

export default  HeldOrders;