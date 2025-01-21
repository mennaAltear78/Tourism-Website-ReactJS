
import ServierOffer from '../ServierOffer/ServierOffer';
import Speaks from '../Speaks/Speaks';
import FeatureOffer from '../featureOffer/FeatureOffer';
import Revol from '../Revol/Revol';
import ContactUs from '../Contact/ContactUs';
import Main from '../main/Main';
import ScrollPartner from '../Scroll/ScrollPartner'


const HomePage = (props) => {


    return (<div>
        <div style={{height:'150px'}}/>
        <Main darkMode={props.darkMode}/>
        <ScrollPartner darkMode={props.darkMode}/>
        <ServierOffer darkMode={props.darkMode}/>
        <Speaks darkMode={props.darkMode}/>
        <FeatureOffer darkMode={props.darkMode}/>
        <Revol darkMode={props.darkMode}/>
        <ContactUs darkMode={props.darkMode}/>
        </div>
    );
};
export default HomePage;