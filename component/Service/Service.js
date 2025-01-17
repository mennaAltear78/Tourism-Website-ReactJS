import { useState } from 'react';
import style from './Service.module.css'
import Title from '../Title';
const Service = (props) => {


    return (
        <div className={style['servDesc']} >
            {/* <div>
                <div className={style['']}/>
                <strong>Sphinx Terms&Condtion</strong>
            </div>
            <p>
            Last Update:12-02-2025
            </p> */}
           
            <p>Terms and Conditions</p>

            <p>1. Introduction</p>
            <p>Welcome to [اسم الموقع]. By accessing or using our website and services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please refrain from using our platform.</p>

            <p>2. Definitions</p>

            <p>"We," "Us," "Our": Refers to [اسم الموقع] and its affipates.</p>
            <p>"User," "You": Refers to any individual or entity accessing our services.</p>
            <p>"Services": Refers to travel-related services such as flights, hotel bookings, car rentals, tours, and airport transfers.</p>


            <p>3. Scope of Services</p>
            <p>We provide an online platform that allows users to book:</p>

            <p>Flights</p>
            <p>Hotels</p>
            <p>Car Rentals</p>
            <p>Tours & Attractions</p>
            <p>Airport Transfers</p>
            <p>AI-Powered Travel Plans</p>

            <p>We act as an intermediary between users and service providers (airlines, hotels, car rental companies, etc.).</p>

            <p>4. Booking and Payment</p>
            <p>4.1 Booking Process</p>

            <p>All bookings made through our platform are subject to availability and confirmation by the service provider.</p>
            <p>You are responsible for ensuring the accuracy of all details provided during the booking process.</p>

            <p>4.2 Payment</p>

            <p>Payments must be made in full at the time of booking.</p> 
            <p>We accept multiple payment methods, including credit/debit cards and online payment gateways.</p>
            <p>Prices are displayed in [العملة] and may be subject to exchange rate fluctuations.</p>


            <p>5. Cancellations and Refunds</p>
            <p>5.1 Cancellation Policy</p>

            <p>Cancellations are subject to the terms and conditions of the respective service provider.</p>
            <p>Refunds, if applicable, will be processed within [عدد الأيام] business days.</p>

            <p>5.2 No-Show Policy</p>

            <p>Failure to show up for a booked service without prior notice may result in forfeiture of any refund.</p>


            <p>6. User Responsibilities</p>

            <p>You must provide accurate and up-to-date information during the booking process.</p>
            <p>You are responsible for complying with all travel regulations, including passport, visa, and health requirements.</p>
            <p>Any misuse of our platform may result in the suspension of your account.</p>


            <p>7. Liability Disclaimer</p>

            <p>We are not responsible for any loss, damage, or inconvenience caused by third-party service providers.</p>
            <p>Our platform is provided "as is," and we do not guarantee uninterrupted or error-free service.</p>


            <p>8. Privacy Policy</p>
            <p>Your personal information is protected under our Privacy Policy, which outlines how we collect, use, and store your data.</p>

            <p>9. Intellectual Property</p>
            <p>All content on our platform, including text, images, and logos, is protected by copyright and trademark laws. You may not use or reproduce any content without our prior written consent.</p>

            <p>10. Governing Law</p>
            <p>These Terms and Conditions are governed by the laws of [الدولة] and any disputes will be resolved in the courts of [المدينة/الدولة].</p>

            <p>11. Changes to Terms</p>
            <p>We reserve the right to modify these Terms and Conditions at any time. Users will be notified of any significant changes via email or a notification on the platform.</p>

            <p>12. Contact Us</p>
            <p>If you have any questions or concerns about these Terms and Conditions, please contact us at:</p>
            <p>Email: support@[اسم الموقع].com</p>
            <p>Phone: [+20 رقم الهاتف]</p>
        </div>
    );
};
export default Service;