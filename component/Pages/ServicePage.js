import { useState } from 'react';
import Service from '../Service/Service';
import Title from '../Title';

const ServicePage = (props) => {
    return (
        <div >
             <Title title='Sphinx Terms&Condtion' description=' Last Update:12-02-2025'/>
            <Service/>
     
        </div>
    );
};
export default ServicePage;