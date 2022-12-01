import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal'
const AllSeller = () => {
    const [deleteUser, setDeleteUser] = useState(null);

    const closeModal = () => {
        setDeleteUser(null);
    }

    const { data: sellerusers = [], isLoading, refetch } = useQuery({
        queryKey: ['sellerusers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/sellerusers');
            const data = await res.json();
            return data;
        }
    })


    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/sellerusers/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make Admin Succefully')
                    refetch()
                }
            })
    }


    const handleDeleteUser = user => {
        fetch(`http://localhost:5000/sellerusers/${user._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`User ${user.name} deleted successfully`)
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
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellerusers.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user?.role !== 'admin' && <button className="btn btn-primary" onClick={() => handleMakeAdmin(user._id)}>Make Admin</button>
                                    }
                                </td>


                                <td>
                                    <label onClick={() => setDeleteUser(user)} htmlFor="confirmation-modal" className="btn btn-warning">Delete</label>

                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deleteUser && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deleteUser.name}. It cannot be undone`}
                    successAction={handleDeleteUser}
                    successButtonName="Delete"
                    modalData={deleteUser}
                    closeModal={closeModal}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default AllSeller;