import { useState } from 'react';
import lamb from '../Assets/iconoir_light-bulb (1).svg'
import style from './FeatureOfferCard.module.css'
const FeatureOfferCard = (props) => {


    return (
        <div className={style['FeatureOfferCard']} style={{backgroundColor: props.darkMode ? '#37383a' : '#F4F6F9',}}>
            <div className={style['FeatureOfferCardsection']} style={{backgroundColor: props.darkMode ? '#37383a' : '#F4F6F9',}}>
                <div><img src={lamb} alt="Company Logo" className="logo" /></div>
                <b style={{color: props.darkMode ? 'white' : 'gray'}}>{props.title}</b>
                <p style={{color: props.darkMode ? 'white' : 'gray'}}>{props.describtion}</p>
                <button className={style['btn']}>
                    Learn More
                </button></div>
        </div>
    );
};
export default FeatureOfferCard;