
import ServierOffer from '../ServierOffer/ServierOffer';
import Speaks from '../Speaks/Speaks';
import FeatureOffer from '../featureOffer/FeatureOffer';
import Revol from '../Revol/Revol';
import ContactUs from '../Contact/ContactUs';
import Main from '../main/Main';
import ScrollPartner from '../Scroll/ScrollPartner'


const HomePage = (props) => {


    return (<div>
        <Main />
        <ScrollPartner />
        <ServierOffer />
        <Speaks />
        <FeatureOffer />
        <Revol />
        <ContactUs />
        </div>
    );
};
export default HomePage;