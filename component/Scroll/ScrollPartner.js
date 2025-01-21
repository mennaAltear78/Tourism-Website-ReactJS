import ScrollPartnerImage from './ScrollPartnerImage';
import Scroller from './Scroller';
import style from './ScrollPartner.module.css'
const ScrollPartner = (props) => {
    // const [state, setstate] = useState(initialValue);
    
    return (
        <div className={style['ScrollPartner']}>
            <Scroller/>
            <div className={style['ScrollPartnerSection']}>
                <b style={{color: props.darkMode ? 'white' : 'black',}}>
                More <span>Than 1000 Partneer</span>
                </b>
                <div>
                    <div>
                           <ScrollPartnerImage/>
                    </div>
                    <div>
                            <ScrollPartnerImage/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ScrollPartner;