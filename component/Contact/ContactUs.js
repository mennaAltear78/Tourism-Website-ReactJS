import { useState } from 'react';
import style from './ContactUs.module.css'
import mobile from '../Assets/Group 1261153522.svg'
import appstore from '../Assets/Frame 1707479975.svg'
import andriodStore from '../Assets/Frame 1707479976.svg'
import qrcode from '../Assets/qrcodeImage.svg'
import Speaks from '../Speaks/Speaks';
import SpeacksSection from '../Speaks/SpeaksSections';
import ContactNote from './ContactNote';
const ContactUs = (props) => {


    return (
        <div className={style['contactUs']}>
            <div>
                <img src={mobile} />
            </div>
            <div className={style['contactdiv']} >
                <div className={style['contactTitle']} >
                   <b>Your all-in-one travel app</b>
                <div className={style['contactDivSection2']} >
                  <p>App-only Deals</p><p>Easy Trip Planning</p>
                   </div>
                </div>

                <div className={style['contactDivSection3']}>
                          <div>
                          <img src={qrcode}/>
                          </div>
                          <div>
                            
                         <ContactNote/>
                            
                           
                         <div className={style['contactStore']}>
                         <img src={andriodStore}/>
                         <img src={appstore}/>
                         </div>
                         <div className={style['contactScan']}>
                            <p><b>
                            Scan the QR code  </b>to download the app</p>
                           
                         </div></div>
                </div>
            </div>
        </div>
    );
};
export default ContactUs;
