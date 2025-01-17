import { useState } from 'react';
import style from './Footer.module.css'
import About from './About';
import appstore from '../Assets/Frame 1707479975.svg'
import andriodStore from '../Assets/Frame 1707479976.svg'
import faceInstaImage from '../Assets/Frame 15 (1).svg'
import Contact from './Contact';
import JoinUs from './JoinUs';
const Footer = (props) => {
    return (
        <div className={style['footer']}>
           <div style={{paddingTop:'40px' }}><hr/></div>
            <div className={style['footerSection1']}>
            
                <About />
             <div ><hr style={{height:'230px' }}/>  </div>
                <Contact />
                <JoinUs />
            </div>
           <hr />

            <div className={style['footerSection2']}>
              <div className={style['footerSection2_1']}>
                  <p>
                  © All Right Reserved Sphinx.Limited 2025
                  </p>
              </div>
                <div className={style['footerSection1_2']} >
                    <div style={{paddingBottom:'30px' ,paddingTop:'20px'}}>
                        <img src={andriodStore} />
                        <img src={appstore} />
                    </div>
                    <div>
                        <img src={faceInstaImage} />
                    </div>

                    <div />
                </div>
            </div>
            
        </div>

    );
};
export default Footer;