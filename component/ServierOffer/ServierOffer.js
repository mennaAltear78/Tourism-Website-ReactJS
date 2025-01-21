import group from '../Assets/Group 1261153521.svg'
import style from './ServierOffer.module.css'


const ServierOffer = (props) => {

    return (
        <div className={style['ServierOffer']}>
            <div>
                <div className={style['ServierOfferSection3']}>
                <b style={{color: props.darkMode ? 'white' : 'black',}}>
                    What Services <span>We Offer ?</span>
                </b></div>
                <div className={style['ServierOfferSection1']} >
              
                    <b style={{color: props.darkMode ? 'white' : 'black',}}>
                        01- Travel Plan
                    </b>
                    <p style={{color: props.darkMode ? 'white' : 'gray',}}>
                        Plan your perfect trip with our AI-powered travel solutions,
                        offering personalized recommendations tailored to your preferences and travel needs.
                    </p><b style={{color: props.darkMode ? 'white' : 'black',}}>
                         02- Flights&Hotels
                    </b>
                    <p style={{color: props.darkMode ? 'white' : 'gray',}}>
                    Book flights and hotels seamlessly with competitive prices 
                    and a variety of options to suit your schedule and budget.
                    </p><b style={{color: props.darkMode ? 'white' : 'black',}}>
                    03- Accommodation
                    </b>
                    <p style={{color: props.darkMode ? 'white' : 'gray',}}>
                    Discover a wide range of accommodations,
                     from luxury hotels to budget-friendly stays, ensuring comfort and convenience wherever you travel
                    </p>
                </div>
            </div>
            <div className={style['ServierOfferSection2']}>
                <img src={group} alt="Company Logo" className="logo" />
            </div>
        </div>
    );
};
export default ServierOffer;