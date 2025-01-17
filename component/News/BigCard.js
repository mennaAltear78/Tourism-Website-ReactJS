import { useState } from 'react';
import image from '../Assets/Image.png'
import logo from '../Assets/Sphinx Go.png'
import style from './BigCard.module.css'
const BigCard = (props) => {
    // const [state, setstate] = useState(initialValue);

    return (
        <div className={style['bigCard']}>
            <div className={style['bigCardSection1']}>
                <b>
                    Lorem Ipsum is simply dummy text of the printing 
                    </b>
                    <p>
                    10-12-2025 |Time : 02:2 AM
                    </p>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                    <div className={style['bigCardSection2']} >
                        <img src={logo}/>
                        <div className={style['hrSection']}><hr/></div>   
                    </div>
                 
            </div>
            <div>
       <img src={image}/>
            </div>
        </div>
    );
};
export default BigCard;