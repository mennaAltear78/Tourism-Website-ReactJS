import { useState } from 'react';
import style from './Tile.module.css'
const Title = (props) => {
    // const [state, setstate] = useState(initialValue);

    return (
        <div className={style['TitleMain']} >
            <div className={style['Title']}>
                <div className={style['startline']}  />
                <b style={{color: props.darkMode ? 'white' : 'black'}}>{props.title}</b></div>
            <p>
                {props.description}
            </p>
        </div>
    );
};
export default Title;