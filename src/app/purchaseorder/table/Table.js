import React from 'react';
import styles from "./style.module.css";
import edit from "../images/edit.png";
import Image from 'next/image';
import uparrow from "../images/uparrow.png";
import remove from "../images/remove.png";

const Table = () => {
  return (
    <div className={styles.container}>
        <div className={styles.cart}>
            <h4>Your PO#2323</h4>
            <p>Reset cart</p>
        </div>
        <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Medicine</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">MRP</th>
                        <th scope="col">Purchase Price</th>
                        <th scope="col">GST%</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Market trend</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td>₹832</td>
                        <td><input type='text' placeholder='&#8377;40' /><span className={styles.price}>20% less </span>  than MRP</td>
                        <td>12</td>
                        <td>Bayer AG</td>
                        <td><span className={styles.percentage}>2%</span> <span><Image src={uparrow} alt='img' /> </span>  </td>
                        <td><span><Image src={edit} alt='img' /> </span><span className='ms-3'><Image src={remove} alt='img' /> </span> </td>
                    </tr>
                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td>₹832</td>
                        <td><input type='text' placeholder='&#8377;40' /><span className={styles.price}>20% less </span> than MRP</td>
                        <td>12</td>
                        <td>Bayer AG</td>
                        <td><span className={styles.percentage}>2%</span> <span><Image src={uparrow} alt='img' /> </span>  </td>
                        <td><span><Image src={edit} alt='img' /> </span><span className='ms-3'><Image src={remove} alt='img' /> </span> </td>

                    </tr>
                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td>₹832</td>
                        <td><input type='text' placeholder='&#8377;40' /><span className={styles.price}>20% less </span>  than MRP</td>
                        <td>12</td>
                        <td>Bayer AG</td>
                        <td><span className={styles.percentage}>2%</span> <span><Image src={uparrow} alt='img' /> </span>  </td>
                        <td><span><Image src={edit} alt='img' /> </span><span className='ms-3'><Image src={remove} alt='img' /> </span> </td>
                    </tr>
                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td>₹832</td>
                        <td><input type='text' placeholder='&#8377;40' /><span className={styles.price}>20% less </span> than MRP</td>
                        <td>12</td>
                        <td>Bayer AG</td>
                        <td><span className={styles.percentage}>2%</span> <span><Image src={uparrow} alt='img' /> </span>  </td>
                        <td><span><Image src={edit} alt='img' /> </span><span className='ms-3'><Image src={remove} alt='img' /> </span> </td>

                    </tr>
                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td>₹832</td>
                        <td><input type='text' placeholder='&#8377;40' /><span className={styles.price}>20% less </span>  than MRP</td>
                        <td>12</td>
                        <td>Bayer AG</td>
                        <td><span className={styles.percentage}>2%</span> <span><Image src={uparrow} alt='img' /> </span>  </td>
                        <td><span><Image src={edit} alt='img' /> </span><span className='ms-3'><Image src={remove} alt='img' /> </span> </td>
                    </tr>
                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td>₹832</td>
                        <td><input type='text' placeholder='&#8377;40' /><span className={styles.price}>20% less </span> than MRP</td>
                        <td>12</td>
                        <td>Bayer AG</td>
                        <td><span className={styles.percentage}>2%</span> <span><Image src={uparrow} alt='img' /> </span>  </td>
                        <td><span><Image src={edit} alt='img' /> </span><span className='ms-3'><Image src={remove} alt='img' /> </span> </td>

                    </tr>
                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td>₹832</td>
                        <td><input type='text' placeholder='&#8377;40' /><span className={styles.price}>20% less </span>  than MRP</td>
                        <td>12</td>
                        <td>Bayer AG</td>
                        <td><span className={styles.percentage}>2%</span> <span><Image src={uparrow} alt='img' /> </span>  </td>
                        <td><span><Image src={edit} alt='img' /> </span><span className='ms-3'><Image src={remove} alt='img' /> </span> </td>
                    </tr>
                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td>₹832</td>
                        <td><input type='text' placeholder='&#8377;40' /><span className={styles.price}>20% less </span> than MRP</td>
                        <td>12</td>
                        <td>Bayer AG</td>
                        <td><span className={styles.percentage}>2%</span> <span><Image src={uparrow} alt='img' /> </span>  </td>
                        <td><span><Image src={edit} alt='img' /> </span><span className='ms-3'><Image src={remove} alt='img' /> </span> </td>

                    </tr>
                    <tr>                   
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Total price:</td>
                        <td>₹1032</td>                       
                    </tr>
                    <tr >                   
                    <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Cash discount:</td>
                        <td>Nil</td>          
                    </tr>
                    <tr>                   
                       <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><b>Payable price</b></td>
                        <td><b>₹969.95</b></td>                        
                    </tr>                  
                </tbody>
            </table>
            <button>Pay</button>

    </div>
  )
}

export default Table