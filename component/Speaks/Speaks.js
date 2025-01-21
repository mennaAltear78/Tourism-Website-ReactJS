import { useState } from 'react';
import SpeacksSection from './SpeaksSections';
import style from './Speaks.module.css'

const Speaks = (props) => {
   
    
    return (
        <div>
            <div className={style['speaksec0']}>
                <b style={{color: props.darkMode ? 'white' : 'black',}}>
               <span>Our</span>  numbers <span>speaks</span>
                </b>
            </div>
            <div className={style['speaksec1']}>
            <div>
                <SpeacksSection darkMode={props.darkMode} price='10+' describtion='Years in business'/>
            </div>
            <div className={style['line']}></div>
            <div>
                <SpeacksSection darkMode={props.darkMode} price='200k+' describtion='Successful Orders'/>
            </div>
            <div  className={style['line']}></div>
            <div>
                <SpeacksSection darkMode={props.darkMode} price='97%' describtion='Happy Clients'/>
            </div>
        </div></div>
    );
};
export default Speaks;