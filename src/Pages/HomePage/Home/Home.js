import React from 'react';
import Banner from '../Banner/Banner';
import ReviewHome from '../ReviewHome/ReviewHome';
import ServiceHome from '../ServiceHome/ServiceHome';
import FAQ from '../FAQ/FAQ';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <ServiceHome></ServiceHome>
            <ReviewHome></ReviewHome>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;