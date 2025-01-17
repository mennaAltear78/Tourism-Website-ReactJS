import { useState } from 'react';
import News from '../News/News';
import BigCard from '../News/BigCard';
import style from '../Footer/JoinUs.module.css'
import Title from '../Title';
const NewsPage = (props) => {
//     const [state, setstate] = useState(initialValue);
    
    return (
       <div >
        <div style={{marginLeft:'60px'}}>
        <Title title='Lastest News' description='Last Update:12-02-2025'  /></div>
        <BigCard/>
        <News/>
        <BigCard/>
        <div style={{display:'flex' ,justifyContent:'center' ,marginBottom:'100px',marginTop:'50px'}}>
        <button className={style['JoinUsButton2']}>
                    View more
            </button></div>
       </div>
    );
};
export default NewsPage;