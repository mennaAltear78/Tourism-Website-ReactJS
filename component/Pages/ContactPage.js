import { useState } from 'react';
import style from './ContactPage.module.css'
import Title from '../Title';
import Image1 from '../Assets/unsplash_K3JXgzzm2NU.svg'
import Image2 from '../Assets/unsplash_eOcyhe5-9sQ.svg'
import Image3 from '../Assets/unsplash_Q1p7bh3SHj8.svg'
const ContactPage = (props) => {
    // const [state, setstate] = useState(initialValue);

    return (
        <div>
            <div className={style['ContactMian']} />
            <Title title='1.About Sphinx' description='Sphinx.com is a global travel service provider offering a seamless experience for booking hotels, flights, and more.
         Available in 24 languages and covering 39 countries, we aim to make travel easy for millions worldwide.'/>
            <Title title='2. Our Network' description='With over 1.1 million hotels and partnerships with 510+ airlines, 
       Sphinx.com provides a comprehensive travel network that covers more than 3,400 airports in 220 countries and regions globally.'/>

            <div className={style['contactMainImage']}><img src={Image3} /></div>
            <Title title='3. 24/7 Customer Support' description='Our customer support team is available 24/7 in multiple languages, ensuring that you receive assistance whenever you need it,
       with additional centers in Cairo, Dubai, and Riyadh for personalized help.'/>
            <div className={style['contactMainImage']}><img src={Image1} /></div>
            <Title title='4. Booking Your Trip' description='Booking your trip is easy with Sphinx.com. Whether you’re looking for flights, hotels, 
      or car rentals, our platform offers a fast and user-friendly experience to help you plan the perfect journey.'/>
            <Title title='5. Global Reach' description='Sphinx.com operates in 220 countries and regions, 
      allowing us to offer a truly global travel experience with personalized services tailored to your needs wherever you are in the world.'/>
            <div className={style['contactMainImage']}><img src={Image2} /></div>

            <p>

            </p>
        </div>

    );
};
export default ContactPage;