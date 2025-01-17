import { useState } from 'react';
import style from './Button.module.css'
const Button = (props) => {

    return (
        <div><button>{props.title}</button></div>
    );
};
export default Button;