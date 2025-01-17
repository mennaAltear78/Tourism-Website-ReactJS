// import { useState } from 'react';
import Button from './Button';
import style from './Header.module.css'
import light from'./Assets/Property 1=True.svg'
import dark from'./Assets/Property 1=False.svg'
import logo from './Assets/Frame 1707480603.png'
import { Link } from 'react-router-dom';
const Header = () => {
    
    // const [state, setstate] = useState(initialValue);

    return (<div className={style['header']}>
        <div className={style['headerSection1']}>
               <img src={logo} alt="Company Logo" className="logo" />
            <nav>
                <ul>
                    <li><Link to="/">Home</Link ></li>
                    <li><Link to="/contactPage">About</Link ></li>
                    <li><Link to="/ServicePage">Services</Link ></li>
                    <li><Link to="/NewsPage">News</Link ></li>
                    {/* <li><Link to="/contactPage">Contact</Link ></li> */}
                </ul>
            </nav></div>
            <div className={style['darkmood']}>
                <Button title="contact us" />
                <img src={light} alt="Company Logo" className="logo" />
                </div> 
    </div>  
    );
};
export default Header;