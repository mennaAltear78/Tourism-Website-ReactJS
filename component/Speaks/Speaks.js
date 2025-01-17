import { useState } from 'react';
import SpeacksSection from './SpeaksSections';
import style from './Speaks.module.css'

const Speaks = (props) => {
   
    
    return (
        <div>
            <div className={style['speaksec0']}>
                <b>
               <span>Our</span>  numbers <span>speaks</span>
                </b>
            </div>
            <div className={style['speaksec1']}>
            <div>
                <SpeacksSection price='10+' describtion='Years in business'/>
            </div>
            <div className={style['line']}></div>
            <div>
                <SpeacksSection price='200k+' describtion='Successful Orders'/>
            </div>
            <div className={style['line']}></div>
            <div>
                <SpeacksSection price='97%' describtion='Happy Clients'/>
            </div>
        </div></div>
    );
};
export default Speaks;