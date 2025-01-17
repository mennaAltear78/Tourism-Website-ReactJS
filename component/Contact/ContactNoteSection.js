import style from './ContactNoteSection.module.css'
const ContactNoteSection = (props) => {
    // const [state, setstate] = useState(initialValue);
    
    return (
        <div className={style['SpeaksSection']}>
           <span><b className={style['SpeaksSection1']}>{props.price}</b></span> 
            <b className={style['SpeaksSection2']}>{props.describtion}</b>
        </div>
    );
};
export default ContactNoteSection;