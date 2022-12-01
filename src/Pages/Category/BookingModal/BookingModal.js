import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';


const BookingModal = ({ bookCar, setBookCar }) => {
    const {user} = useContext(AuthContext);
    console.log('booking modal', user);
    const {carName, resellPrice, location } = bookCar;

    const handleCarBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const carName = form.carName.value;
        const email = form.email.value;
        const price = form.price.value;
        const location = form.location.value;
        const phone = form.phone.value;
        const meetingLocation = form.meetingLocation.value;

        const bookingCar = {
            name,
            carName,
            email,
            price,
            location,
            phone,
            meetingLocation

        };

        fetch('https://secondhand-car-server-side.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingCar)

        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    setBookCar(null);
                    toast.success("Booking Confirmed")

                }
                else{
                    toast.error(data.message);
                }
               
           })

        
    }
    return (
        <>

            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Model : {carName}</h3>
                    <form className="grid grid-cols-1 gap-3 mt-10" onSubmit={handleCarBooking}>
                        <input type="name" name="name" placeholder="Your Name" defaultValue={user?.displayName} className="input input-bordered w-full" disabled/>
                        <input type="name" name="carName" placeholder="Car Name" defaultValue={carName} className="input input-bordered w-full" disabled/>
                        <input type="email" name="email" placeholder="Email" defaultValue={user?.email} className="input input-bordered w-full" disabled />
                        <input type="text" name="price" placeholder="Price" defaultValue={resellPrice} className="input input-bordered w-full" disabled />
                        <input type="text" name="location" placeholder="location" defaultValue={location} className="input input-bordered w-full" disabled />
                        <input type="phone" name="phone" placeholder="Phone Number"  className="input input-bordered w-full"  />
                        <input type="text" name="meetingLocation" placeholder="Meeting Location"  className="input input-bordered w-full"  />

                        <input className="btn btn-primary" type='submit' value='submit' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;