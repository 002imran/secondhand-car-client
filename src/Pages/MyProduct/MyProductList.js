import React from 'react';

const MyProductList = ({products}) => {
    console.log(products);
    const {name} = products; 
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            
                            <th>Car-Model</th>
                            <th>Price</th>
                            <th>Perches</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{name}</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProductList;