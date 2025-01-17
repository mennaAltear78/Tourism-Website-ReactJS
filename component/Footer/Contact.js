import { useState } from 'react';
import style from './Contact.module.css'
const Contact = (props) => {
    
    
    return (
    <div className={style['Contact']}>
    <b>Contact</b>
        <p>
        +201271615021        </p>
        <p>
        info@sphinx.com
        </p>
        <p>
        support@sphinx.com        </p>
    </div>
    );
};
export default Contact;