import { useState } from 'react';
import News from '../News/News';
import BigCard from '../News/BigCard';
import style from '../Footer/JoinUs.module.css'
import Title from '../Title';
const NewsPage = (props) => {
//     const [state, setstate] = useState(initialValue);
      console.log(props.darkMode,"_______________________")
    return (
       <div >
        <div style={{height:'100px'}}/>
        <div style={{marginLeft:'60px' }} >
        <Title title='Lastest News' description='Last Update:12-02-2025' darkMode={props.darkMode}/></div>
        <BigCard darkMode={props.darkMode}/>
        <News darkMode={props.darkMode}/>
        <BigCard darkMode={props.darkMode}/>
        <div style={{display:'flex' ,justifyContent:'center' ,marginBottom:'100px',marginTop:'50px',color:props.darkMode ? 'black' : 'white'}}>
        <button className={style['JoinUsButton2']}>
                    View more
            </button></div>
       </div>
    );
};
export default NewsPage;