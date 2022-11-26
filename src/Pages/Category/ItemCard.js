import React from 'react';

const ItemCard = ({ cars, setBookCar }) => {
    const {carName, carImage, location, originalPrice, resellPrice, totalUsed, sellerName, dateOfPost} = cars;
    return (
        <div className="card w-auto bg-gray-100 shadow-xl">
            <figure><img src={carImage} alt="carName" className='w-3/2 h-96 px-24 pt-12'/></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Brand: {carName}
                    <div className="badge badge-secondary">Recent</div>
                </h2>
                <p>Location: {location}</p>
                <p>Original Price: {originalPrice}</p>
                <p><strong>Resell Price: {resellPrice}</strong></p>
                <p>Total Use: {totalUsed}</p>
                <p>Seller: {sellerName}</p>
                <p><strong>Date Of Post: {dateOfPost}</strong></p>
                <div className="card-actions justify-end">
                  <label htmlFor="booking-modal"
                     className="btn btn-primary"
                        onClick={() => setBookCar(cars)}
                     >Book Now</label>   
                </div>
               
            </div>
        </div>
    );
};

export default ItemCard;