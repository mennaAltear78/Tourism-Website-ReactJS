import { useState } from 'react';
import style from './RevolCard.module.css'
const RevolCard = (props) => {
 
    
    return (
       <div className={style['RevolCard']}>
        <img src={props.img} alt="Company Logo" className="logo" />
        <b>{props.title}</b>
        <p>{props.describtion}</p>
        <div className={style['RelHr']}><hr/></div>
        
       <div className={style['RelLogo']}><img src={props.logo} alt="Company Logo" className="logo" /></div> 
       </div>)
    
};
export default RevolCard;