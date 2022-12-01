import React from 'react';

const Accordion = () => {
    return (
        <div className='mt-16'>
            <main class="flex justify-center items-center p-4  w-full bg-gradient-to-r">
                <div class="bg-white w-full sm:w-1/2 lg:w-4/5 border border-gray-200 divide-y divide-gray-200">
                    <h2 className='text-3xl text-center py-3'>FreeQuenty Ask Question?</h2>
                    <details>
                        <summary class="question py-3 px-4 cursor-pointer select-none w-full outline-none text-xl">Do we only sell second hand Car?</summary>
                        <p class="pt-1 pb-3 px-4"> <code class="text-sm text-red-500"></code> Yes, this is a market place only for usable car!</p>
                    </details>
                    <details>
                        <summary class="question py-3 px-4 cursor-pointer select-none w-full text-xl">Can I bealieve on the prodcut?</summary>
                        <p class="pt-1 pb-3 px-4">Of course. We ensure it but we have some term and we condition that you can check the
                             product by hand yourslef, for futher problem you can check the car by any experties.</p>
                    </details>
                    <details>
                        <summary class="question py-3 px-4 cursor-pointer select-none w-full text-xl">Is is safe without inform us to by car from here?</summary>
                        <p class="pt-1 pb-3 px-4">Right now we will never suggest you to buy anyhting hand to hand for the safty confirm us first.</p>
                    </details>
                </div>
            </main>
          
        </div>
    );
};

export default Accordion;