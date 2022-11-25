import React from 'react';
const CategoryCard = ({categoryName }) => {
    const {img, name} = categoryName;
    // console.log(categoryName);
    return (
        <div className={`card card-side bg-base-100 shadow-xl p-2`}>
            <figure>
                <img className='h-20 w-56' src={img} alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
            </div>
        </div>
    );
};

export default CategoryCard;