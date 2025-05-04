import React from 'react';
import './Home.css'
import HomeBanner from '../../Components/HomeBanner/HomeBanner';
import HomeSec1 from '../../Components/HomeSec1/HomeSec1';
import HomeSec2 from '../../Components/HomeSec2/HomeSec2';
import HomeSec3 from '../../Components/HomeSec3/HomeSec3';
import HomeSec4 from '../../Components/HomeSec4/HomeSec4';
import HomeAbout from '../../Components/HomeAbout';
import HomeSec5 from '../../Components/HomeSec5/HomeSec5';
import HomeSec6 from '../../Components/HomeSec6/HomeSec6.js';
import ContactForm from '../../Components/ContactForm/ContactForm.js';

const Home = () => {
    return (
        <div className='home'>
            <HomeBanner/>
            <HomeAbout/>
            <HomeSec1/>
            <HomeSec2/>
            <HomeSec3/>
            <HomeSec4/>
            {/* <HomeSec5/> */}
            <HomeSec6/>
            <ContactForm/>
        </div>
    );
};

export default Home;