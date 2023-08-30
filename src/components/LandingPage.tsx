import React from 'react';
import { Image,Col } from 'react-bootstrap'
import myself from '../img/myself.jpeg'
import styles from '../styles/landingPage.module.scss'
function LandingPage() {
  return (
    <div>
        <div className={`d-flex justify-content-center align-items-center ${styles.landingpage__wrapper}`}>
        <div className={styles.image__container}>
          <Image src={myself} rounded style={{width: '63%',marginLeft: '7rem'}}/>
        </div>
        <div className='w-3'  style={{width: '50%'}}>
            <div className={`text-white ${styles.name__container}`}>Aman Kumar</div>
            <div className='text-secondary h2'>Frontend Web Developer</div>
        </div>
        </div>
    </div>
  )
}

export default LandingPage