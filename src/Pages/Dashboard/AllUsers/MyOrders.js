import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal'
const MyOrders = () => {
    const [cancelOrder, setCancelOrder] = useState(null);

    const closeModal = () => {
        setCancelOrder(null);
    }

    const { data: bookings = [], isLoading, refetch } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await fetch('https://secondhand-car-server-side.vercel.app/bookings');
            const data = await res.json();
            return data;
        }
    })


    // const handleMakeAdmin = id => {
    //     fetch(`https://secondhand-car-server-side.vercel.app/sellerusers/admin/${id}`, {
    //         method: 'PUT',
    //         headers: {
    //             authorization: `bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.modifiedCount > 0) {
    //                 toast.success('Make Admin Succefully')
    //                 refetch()
    //             }
    //         })
    // }


    const handleDeleteOrder = product => {
        fetch(`https://secondhand-car-server-side.vercel.app/bookings/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Order ${product.carName} Cancel successfully`)
                }

            })
    }


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-3xl'>All Sellers</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Car Model</th>
                            <th>Price</th>
                            {/* <th>Admin</th> */}
                            <th>Cancel Orders</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td>{product.carName}</td>
                                <td>{product.price}</td>
                                {/* <td>
                                    {
                                        user?.role !== 'user' && <button className="btn btn-primary" onClick={() => handleMakeAdmin(user._id)}>Make Admin</button>
                                    }
                                </td> */}


                                <td>
                                    <label onClick={() => setCancelOrder(product)} htmlFor="confirmation-modal" className="btn btn-warning">Cencel</label>

                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {
                cancelOrder && <ConfirmationModal
                    title={`Are you sure you want to Cancel?`}
                    message={`If you delete ${cancelOrder.carName}. Your order will be cancel`}
                    successAction={handleDeleteOrder}
                    successButtonName="Delete"
                    modalData={cancelOrder}
                    closeModal={closeModal}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default MyOrders;