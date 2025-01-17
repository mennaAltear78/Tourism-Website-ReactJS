import { useState } from 'react';
import lamb from '../Assets/iconoir_light-bulb (1).svg'
import style from './FeatureOfferCard.module.css'
const FeatureOfferCard = (props) => {


    return (
        <div className={style['FeatureOfferCard']}>
            <div className={style['FeatureOfferCardsection']}>
                <div><img src={lamb} alt="Company Logo" className="logo" /></div>
                <b>{props.title}</b>
                <p>{props.describtion}</p>
                <button className={style['btn']}>
                    Learn More
                </button></div>
        </div>
    );
};
export default FeatureOfferCard;