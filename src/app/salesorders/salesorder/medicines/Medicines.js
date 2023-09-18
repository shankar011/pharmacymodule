import React from 'react';
import styles from "./style.module.css";
import dawa from "../images/dawa_2.svg";
import Image from 'next/image';

const Medicines = () => {
    return (
        <div className={styles.left}>
             <div className={styles.medicine}>
                <div className={styles.top}>
                    <h3>Add medicines</h3>
                    <div>
                        <span>Reset cart <button className='ms-4'>Add to cart</button> </span>
                    </div>
                </div>
                <form className=' m-2'>
                    <div className={styles.medico}>
                        <div className="form-group ms-3">
                            <label for="medicinename">Medicine name</label>
                            <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Dolo" />
                            <small className="form-text text-muted"><span style={{color:"#FF0000", fontSize:"12px"}}>Medicine not available.</span> <span style={{color:"#7F82FF", fontSize:"12px"}}>  Update inventory? </span> </small>
                        </div>

                        <div className="form-group">
                            <input type="text" className="form-control mt-4 ms-2" placeholder="paracetamol" />
                        </div>
                    </div>

                    <div className="form-group  ms-3 mt-2">
                        <label for="exampleFormControlSelect1">Quantity</label>
                        <select className="form-control w-50">
                            <option>Enter quanntity</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>

                </form>
            </div>
            <div>
                <Image src={dawa} alt="img" />
            </div>
        </div>
    )
}

export default Medicines