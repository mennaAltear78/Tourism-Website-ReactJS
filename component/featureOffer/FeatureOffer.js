import { useState } from 'react';
import FeatureOfferCard from './FeatureOfferCard';
import style from './FeatureOffer.module.css'
const FeatureOffer = (props) => {
    // const [state, setstate] = useState(initialValue);

    return (
        <div  className={style['FeatureOffer']}>
           <div className={style['FeatureOfferTitle']}><b><span>Features</span> we offer</b></div> 
            <div className={style['FeatureOfferSections']}>
                <div className={style['FeatureOfferSection1']}>
                    <FeatureOfferCard title=' Book Flights Effortlessly' describtion='Easily book your flights with a wide selection of airlines to match your schedule and budget, all in just a few clicks.' />
                    <FeatureOfferCard title='Find the Perfect Stay' describtion='Discover a variety of hotels and vacation rentals that fit every taste and budget, and enjoy the best guaranteed rates.' />

                </div>
                <div className={style['FeatureOfferSection2']}>
                    <FeatureOfferCard title='Tours & Attractions' describtion='Experience the best tours and activities in your favorite destination, with personalized itineraries for families, solo travelers, and adventurers.' />
                    <FeatureOfferCard title='Smart Itinerary Planning' describtion='Plan the perfect trip with our AI-powered itinerary planner, offering personalized recommendations based on your preferences and trip duration' />


                </div>
                <div className={style['FeatureOfferSection2']}>
                    <FeatureOfferCard title='Affordabble Car Rentals' describtion='Rent a car with ease from a wide range of vehicles at competitive prices, giving you the freedom to explore your destination your way.' />
                    <FeatureOfferCard title='Seamless Airport Transfers' describtion='Start or end your journey with ease using our airport transfer services, ensuring a smooth, safe, and comfortable ride to your destination.' />
                </div>


            </div>
        </div>
    );
};
export default FeatureOffer;