import { useState } from 'react';
import style from './JoinUs.module.css'
const JoinUs = (props) => {


    return (
        <div className={style['JoinUs']}>
            <b>join us</b>
            <div className={style['JoinUsButtonSection']} >
                <button className={style['JoinUsButton1']}>
                    As Hotel suppler
                </button>
                <button className={style['JoinUsButton2']}>
                    As Tours Provider
                </button>
                </div>
        </div>
    );
};
export default JoinUs;