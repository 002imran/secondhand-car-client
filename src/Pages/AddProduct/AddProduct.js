// import React, { useContext } from 'react';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
// import { AuthContext } from '../../contexts/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext);

    const navigate = useNavigate();
    const [carAdd, setCarAdd] = useState(null)

    const handleCarAdd = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const condition = form.condition.value;
        const location = form.location.value;
        const phone = form.phone.value;
        const purchase = form.purchase.value;
        const description = form.description.value;
        const email = form.email.value;

        const addCar = {
            name,
            price,
            condition,
            location,
            phone,
            purchase,
            description,
            email

        }
        // console.log(addCar);
        fetch('http://localhost:5000/addproduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addCar)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setCarAdd(null);
                    toast.success("Added Succefully")

                }
                else {
                    toast.error(data.message);
                }

            })
    }

    return (
    
            <div className="flex items-center min-h-screen bg-gray-50">
                
                <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
              
                <div className="flex flex-col md:flex-row">
                    
                        <div className="flex items-center justify-center p-6 sm:p-12 w-full md:p-36">
                        <div className="w-full">

                            
                            <form className="grid grid-cols-1 gap-3 mt-10" onSubmit={handleCarAdd}>
                                <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
                                    Add A Product
                                </h1>
                                <input type="name" name="name" placeholder="Car Name/Model"  className="input input-bordered w-full" />
                                <input type="text" name="price" placeholder="Price"  className="input input-bordered w-full" />
                                <input type="text" name="condition" placeholder="Condition" className="input input-bordered w-full" />
                                <input type="location" name="location" placeholder="location"  className="input input-bordered w-full" />
                                <input type="phone" name="phone" placeholder="Phone Number" className="input input-bordered w-full" />
                                <input type="text" name="purchase" placeholder="Purchase" className="input input-bordered w-full" />
                                <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" />
                                <input type="email" name="email" placeholder="Email" defaultValue={user?.email} className="input input-bordered w-full" disabled />

                                <input className="btn btn-primary" type='submit' value='submit' />
                            </form>

                         </div>
                        </div>
                    </div>
                </div>
            </div>
    
    );
};

export default AddProduct;