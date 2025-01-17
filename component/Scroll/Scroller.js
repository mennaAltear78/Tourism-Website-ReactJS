import { useEffect, useRef } from 'react';
import scrolImage from '../Assets/Frame 1707480614.png'
const Scroller = () => {
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
      style={{
        height:'64px',
        overflowX: 'auto', // لتمكين التمرير الأفقي
        // whiteSpace: 'nowrap', // لمنع التفاف النص
        border: '1px solid #ccc',
        scrollbarWidth: 'none', // إخفاء شريط التمرير في المتصفحات التي تدعمه (Firefox)
        marginTop:'90px',
        display:'flex' ,alignItems:'center',
        backgroundColor:'rgba(204, 196, 196, 0.475)'

      }}
    >
      
      <img src={scrolImage} alt="Company Logo" className="logo" />
      <img src={scrolImage} alt="Company Logo" className="logo" />
      <img src={scrolImage} alt="Company Logo" className="logo" />
      <img src={scrolImage} alt="Company Logo" className="logo" />
      <img src={scrolImage} alt="Company Logo" className="logo" />
      <img src={scrolImage} alt="Company Logo" className="logo" />
      <img src={scrolImage} alt="Company Logo" className="logo" />
      
    </div>
  );
};

export default Scroller;
