import { useState } from 'react';
import siteImage from '../Assets/animation.png'
import style from './Main.module.css'
import faceInstaImage from '../Assets/Frame 15.svg'
import Button from '../Button';
const Main = (props) => {
    // const [state, setstate] = useState(initialValue);

    return (
        <div className={style['main']}>

            <div className={style['mainSections']}>
                <div className={style['mainSectionImg1']}><img src={faceInstaImage} alt="Company Logo" className="logo" /></div>
                <div>
                    <div className={style['mainSection1']}>
                        Your Journey to <span>Success Starts Here </span>
                    </div>
                    <div className={style['mainSection2']}>
                        <pr>
                            "Success is just a step away! Tell us more about yourself and your business,
                            and let us unlock new opportunities for growth together.
                            Don’t hesitate—join our network of trusted partners and take your business to the next level today!"
                        </pr></div>  <div>
                        <div className={style['mainBtnSection']}>
                            <Button style={{backgroundColor: "blue"}} title="Download App" />
                            <Button  style={{backgroundColor: "rgb(175, 135, 1)"}}  title='Be partneer' />
                        </div>
                    </div>
                </div>

            </div>
            <div className={style['mainSectionImg2']}><img src={siteImage} alt="Company Logo" className="logo" /></div>
            
        </div>
    );
};
export default Main;