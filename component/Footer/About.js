import { useState } from 'react';
import logo from '../Assets/Frame 1707480603.png'
import style from './About.module.css'
const About = (props) => {
 
    
    return (
      <div className={style['About']}>
        <div className={style['Aboutsection1']}>
              <img src={logo}/>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. \
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        </p>
        </div>
      <div>
        <b>About Sphinx</b>
        <p>
        About Us
        </p>
        <p>
        Careers
        </p>
        <p>
        Terms&Conditions 
        </p>
        <p>
        Terms&Conditions 
        </p>
      </div>

      </div>
    );
};
export default About;