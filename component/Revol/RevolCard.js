import { useState } from 'react';
import style from './RevolCard.module.css'
const RevolCard = (props) => {
 
    
    return (
       <div className={style['RevolCard']} style={{backgroundColor: props.darkMode ? '#37383a' : '#F4F6F9',}}>
        <img src={props.img} alt="Company Logo" className="logo" />
        <b style={{color: props.darkMode ? 'white' : 'black',}}>{props.title}</b>
        <p style={{color: props.darkMode ? 'white' : 'gray',}}>{props.describtion}</p>
        <div className={style['RelHr']}><hr/></div>
        
       <div className={style['RelLogo']}><img src={props.logo} alt="Company Logo" className="logo" /></div> 
       </div>)
    
};
export default RevolCard;