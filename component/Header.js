// import { useState } from 'react';
import Button from './Button';
import style from './Header.module.css'
import darkcircle from './Assets/mingcute_dark-fill.svg'
import lightcircle from './Assets/mingcute_light-fill.svg'
import logo from './Assets/Frame 1707480603.png'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = (props) => {

    // const [darkMode, setDarkMode] = useState(() => {
    //     return localStorage.getItem('backgroundColor') === 'black';
    // });

    // // Update background color and localStorage when dark mode changes
    // useEffect(() => {
    //     document.body.style.backgroundColor = darkMode ? 'black' : 'white';
    //     localStorage.setItem('backgroundColor', darkMode ? 'black' : 'white');
    // }, [darkMode]);

    // // Handle toggle switch
    // const handleToggle = () => {
    //     setDarkMode(!darkMode);

    // };
    const [activePage, setActivePage] = useState('Home');

    const handlePageChange = (page) => {
        setActivePage(page);
    };


    return (
        <div className={style['headermain']}>
            <div className={style['header']}>
                <div className={style['headerSection1']}>
                    <img src={logo} alt="Company Logo" className="logo" />
                    <nav>
                        <ul>
                            <li className={activePage === 'Home' ? style['active'] : ''}><Link to="/">Home</Link ></li>
                            <li className={activePage === 'About' ? style['active'] : ''}><Link to="/contactPage">About</Link ></li>
                            <li className={activePage === 'Services' ? style['active'] : ''}><Link to="/ServicePage">Services</Link ></li>
                            <li className={activePage === 'News' ? style['active'] : ''}><Link to="/NewsPage">News</Link ></li>
                            {/* <li><Link to="/contactPage">Contact</Link ></li> */}
                        </ul>
                    </nav></div>

                <div className={style['darkmood']}   >
                    <Button title="contact us" />
                    <input
                        type="checkbox"
                        id="darkModeToggle"
                        checked={props.darkMode}
                        onChange={props.handleToggle}
                    />
                    <label htmlFor="darkModeToggle">
                        <div className={style['slide']} style={{
                            backgroundColor: props.darkMode ? 'black' : 'white',
                        }}>
                            {/* <img src={darkcircle}  alt="Company Logo" className={darkMode ? style['darkcircle']:style['lightcircle']} /> */}
                            {props.darkMode ? <img src={darkcircle} alt="Company Logo" className={style['darkcircle']} /> :
                                <img src={lightcircle} alt="Company Logo" className={style['lightcircle']} />}
                        </div></label>
                </div>

            </div>
        </div>
    );
};
export default Header;