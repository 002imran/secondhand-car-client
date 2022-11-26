import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({bookCar}) => {
    const {user} = useContext(AuthContext);
    console.log('booking modal', user);
    const {carName, resellPrice, location } = bookCar;
    return (
        <>

            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Model : {carName}</h3>
                      <form className="grid grid-cols-1 gap-3 mt-10">
                        <input type="text" placeholder={user?.displayName} className="input input-bordered w-full" disabled/>
                        <input type="text" placeholder={user?.email} className="input input-bordered w-full" disabled />
                        <input type="text" placeholder={resellPrice} className="input input-bordered w-full" disabled />
                        <input type="text" placeholder={location} className="input input-bordered w-full" disabled />
                        <input type="text" placeholder="Phone Number" className="input input-bordered w-full"  />
                        <input type="text" placeholder="Meeting Location" className="input input-bordered w-full"  />

                        <input className="btn btn-primary" type='submit' value='submit' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;