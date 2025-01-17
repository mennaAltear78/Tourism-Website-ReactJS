
import style from './ContactNote.module.css'
import ContactNoteSection from './ContactNoteSection';

const ContactNote = (props) => {
    
    return (
        <div >
            <div className={style['speaksec0']}>
            
            </div>
            <div className={style['speaksec1']}>
            <div>
                <ContactNoteSection price='500K+' describtion='Daily Users'/>
            </div>
            <div className={style['line']}></div>
            <div>
                <ContactNoteSection price='500k+' describtion='Daily Downloads'/>
            </div>
            <div className={style['line']}></div>
            <div>
                <ContactNoteSection price='3.7' describtion='Rating'/>
            </div>
        </div></div>
    );
};
export default ContactNote;