import {useEffect,useRef } from 'react';
import scror from '../Assets/download 7.png'
import style from './ScrollPartnerImage.module.css'
const ScrollPartnerImage = (props) => {
    const scrollRef = useRef(null);

    useEffect(() => {
      const scrollElement = scrollRef.current;
  
      
      // تحديد سرعة التمرير الأفقي
      const scrollSpeed = 2; // السرعة (بالبكسل)
  
      const autoScroll = () => {
        // التأكد من وجود محتوى أكبر من العنصر لتمكين التمرير
        if (scrollElement.scrollWidth > scrollElement.clientWidth) {
          // تحريك التمرير بشكل أفقي
          scrollElement.scrollLeft += scrollSpeed;
    
  
          if (scrollElement.scrollLeft + scrollElement.clientWidth >=scrollElement.scrollWidth-1) {
            scrollElement.scrollLeft = 0; // العودة إلى بداية التمرير
          }
        }
      };
  
      // applaying it each 20 sec
      const intervalId= setInterval(autoScroll,20); 
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <div
        ref={scrollRef}
        className={style['mainDivScrollPartner']}>
        <img src={scror} alt="Company Logo" className="logo" />
        <img src={scror} alt="Company Logo" className="logo" />
        <img src={scror} alt="Company Logo" className="logo" />
        <img src={scror} alt="Company Logo" className="logo" />
        <img src={scror} alt="Company Logo" className="logo" />
        <img src={scror} alt="Company Logo" className="logo" />
        <img src={scror} alt="Company Logo" className="logo" />
        <img src={scror} alt="Company Logo" className="logo" />
        <img src={scror} alt="Company Logo" className="logo" />
        <img src={scror} alt="Company Logo" className="logo" />
        <img src={scror} alt="Company Logo" className="logo" />
        <img src={scror} alt="Company Logo" className="logo" />
        <img src={scror} alt="Company Logo" className="logo" />
        <img src={scror} alt="Company Logo" className="logo" />
        
      </div>
    );
    
};
export default ScrollPartnerImage;