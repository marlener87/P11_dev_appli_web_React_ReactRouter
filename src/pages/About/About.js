import React from 'react';
import Collaspe from '../../components/Collapse/Collaspe';
import Header from '../../components/Header/Header';
import imageHeader from '../../assets/img/apropos.jpg';

const About = () => {
    

    return (
        <main className="about">
            <Header imageHeader={imageHeader} className='bannerAbout' />
            <Collaspe />
        </main>
    );
};

export default About;