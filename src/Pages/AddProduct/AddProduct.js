import React from 'react';

const AddProduct = () => {
    return (
    
            <div className="flex items-center min-h-screen bg-gray-50">
                
                <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
              
                <div className="flex flex-col md:flex-row">
                    
                        <div className="flex items-center justify-center p-6 sm:p-12 w-full md:p-36">
                        <div className="w-full">

                                <form >
                                    <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
                                        Add A Product
                                    </h1>
                                    <div>
                                        <label className="block text-sm">Product Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            placeholder="Product Name"
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <label className="block text-sm">Price</label>
                                        <input
                                            type="text"
                                            name="price"
                                            className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            placeholder="Price"
                                        />
                                    </div>
                                    <div>
                                        <label className="block mt-4 text-sm">Condition</label>
                                        <input
                                            className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            placeholder="Condition"
                                            type="text"
                                            name="condition"
                                        />
                                    </div>
                                    <div>
                                        <label className="block mt-4 text-sm">Mobile No</label>
                                        <input
                                            className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            placeholder="Mobile Number"
                                            type="number"
                                            name="mobile"
                                        />
                                    </div>
                                    <div>
                                        <label className="block mt-4 text-sm">Location</label>
                                        <input
                                            className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            placeholder="Give Your Location"
                                            type="text"
                                            name="location"
                                        />
                                    </div>
                                    <div>
                                        <label className="block mt-4 text-sm">Year Of Purchase</label>
                                        <input
                                            className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            placeholder="Purches of Years"
                                            type="text"
                                            name="purchase"
                                        />
                                    </div>

                                    <div>
                                        <label className="block mt-4 text-sm">Description</label>
                                        <input
                                            className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            placeholder="Description"
                                            type="text"
                                            name="description"
                                        />
                                    </div>
                                    <button
                                        className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                                        href="#"
                                        type='submit'
                                    >
                                        Add Now
                                    </button>
                                    <p className='text-red-600'> </p>
                                </form>


                         </div>
                        </div>
                    </div>
                </div>
            </div>
    
    );
};

export default AddProduct;