import React from 'react';
import Category from '../../Category/Category';
import Accordion from '../Accordion/Accordion';
import Banner from '../Banner/Banner';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Accordion></Accordion>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;