import { useState } from 'react';
import Service from '../Service/Service';
import Title from '../Title';

const ServicePage = (props) => {
    return (
        <div >
            <div style={{height:'100px'}}/>
             <Title title='Sphinx Terms&Condtion' description=' Last Update:12-02-2025' darkMode={props.darkMode}/>
            <Service darkMode={props.darkMode}/>
     
        </div>
    );
};
export default ServicePage;