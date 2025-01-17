import { useState } from 'react';
import RevolCard from './RevolCard';
import style from './Revol.module.css'
import image from '../Assets/Image.png'
import logo from '../Assets/Sphinx Go.png'
const Revol = (props) => {
    
    
    return (
        <div>
           <div className={style['RevolSection1']}> <b><span>Revolutionism</span> the ways we Travel</b>
           
           
           </div>
            <div className={style['RevolSection2']}>
                <RevolCard logo={logo} img={image} title='Lorem Ipsum is simply dummy text of the printing ' describtion='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'/>
                <RevolCard logo={logo} img={image} title='Lorem Ipsum is simply dummy text of the printing ' describtion='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'/>
                <RevolCard logo={logo} img={image} title='Lorem Ipsum is simply dummy text of the printing ' describtion='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'/>
                
            </div>
        </div>
    );
};
export default Revol;