import React from 'react';
import banner from '../../../assets/images/images/banner.jpg'

const Banner = () => {
    return (
        <div className='mt-10'>
            <div className="hero h-auto py-36" style={{ background: `url(${banner})` }}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} className="max-w-sm rounded-lg shadow-2xl" alt=''/>
                    <div>
                        <h1 className="text-5xl font-bold">Our Exclusive Collections!</h1>
                        <p className="py-6">We have a lots of exclusive second hand car collection, You can find your best one from us.From Old exclusive 
                            to new model you can find your favorite one.</p>
                        <button className="btn btn-primary">Explore Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;