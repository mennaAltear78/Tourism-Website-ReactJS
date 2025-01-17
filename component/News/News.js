import { useState } from 'react';
import image from '../Assets/Image.png'
import logo from '../Assets/Sphinx Go.png'
import RevolCard from '../Revol/RevolCard';
import style from './News.module.css'
const News = (props) => {
    // const [state, setstate] = useState(initialValue);
    
    return (
        <div>
                 <div className={style['cardsSection1']}>
                    
                <RevolCard logo={logo} img={image} title='Lorem Ipsum is simply dummy text of the printing ' describtion='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'/>
                <RevolCard logo={logo} img={image} title='Lorem Ipsum is simply dummy text of the printing ' describtion='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'/>
                <RevolCard logo={logo} img={image} title='Lorem Ipsum is simply dummy text of the printing ' describtion='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'/>
                
            </div>
            <div className={style['cardsSection2']}>
                    
                    <RevolCard logo={logo} img={image} title='Lorem Ipsum is simply dummy text of the printing ' describtion='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'/>
                    <RevolCard logo={logo} img={image} title='Lorem Ipsum is simply dummy text of the printing ' describtion='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'/>
                    <RevolCard logo={logo} img={image} title='Lorem Ipsum is simply dummy text of the printing ' describtion='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'/>
                    
                </div>
        </div>
    );
};
export default News;