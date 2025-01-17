import { useState } from 'react';
import style from './SpeaksSections.module.css'
const SpeacksSection = (props) => {
    // const [state, setstate] = useState(initialValue);
    
    return (
        <div className={style['SpeaksSection']}>
           <span><b className={style['SpeaksSection1']}>{props.price}</b></span> 
            <b className={style['SpeaksSection2']}>{props.describtion}</b>
        </div>
    );
};
export default SpeacksSection;