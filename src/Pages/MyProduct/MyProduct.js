import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import MyProductList from './MyProductList';

const MyProduct = () => {
    // const [myProducts, setMyProducts] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:5000/myproduct')
    //         .then(res => res.json())
    //         .then(data => setMyProducts(data));
    // },[])

    const {user} = useContext(AuthContext);
    const url = `http://localhost:5000/myproduct?email=${user?.email}`;

    const { data: myproducts = [] } = useQuery({
        queryKey: ['myproducts', user?.emial],
        queryFn: async () => {
            const res = await fetch(url,{
                headers:{
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
             
            const data = await res.json();
            return data;

        }
    })

    return (
    
        // <div>
        //     {
        //         myProducts.map(products =><MyProductList
        //             key={products._id}
        //             products={products}
        //             >

        //             </MyProductList>
        //             )
            
        //     }
        // </div>

        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Car-Name</th>
                        <th>Price</th>
                        <th>Purchase</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myproducts.map((product, i) =>
                            <tr>
                                <th>{i+1}</th>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.purchase}</td>
                            </tr>
                        
                        )
                    }
                   

                </tbody>
            </table>
        </div>
    );
};

export default MyProduct;