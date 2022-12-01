import React from 'react';
import bgImg from '../../../assets/images/images/banner1.jpg'

const Subscribe = () => {
    return (
        <div>
            
            <div class="container flex flex-col justify-center items-center mx-auto my-8 py-10">

                <div style={{ background: `url(${bgImg})` }} class="max-w-5xl bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center">
             

                </div>

                 <div class="bg-white -mt-24 shadow-md rounded-lg overflow-hidden">
                    <div class="items-center justify-between py-10 px-5 bg-white shadow-2xl rounded-lg mx-auto text-center">
                        <div class="px-2 -mt-6">
                            <div class="text-center">
                                <h1 class="font-normal text-3xl text-grey-800 font-medium leading-loose my-3 w-full">Get touch
                                    with us</h1>
                                <div class="w-full text-center">
                                    <form action="#">
                                        <div class="max-w-sm mx-auto p-1 pr-0 flex items-center">
                                            <input type="email" placeholder="yourmail@example.com"
                                                class="flex-1 appearance-none rounded shadow p-3 text-grey-dark mr-2 focus:outline-none" />
                                                <button type="submit"
                                                    class="bg-blue-600 text-white text-base font-semibold rounded-md shadow-md hover:bg-indigo-600 p-3">
                                                    Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               

            </div>
            
        </div>
    );
};

export default Subscribe;