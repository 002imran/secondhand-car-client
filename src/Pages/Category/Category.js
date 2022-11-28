import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryCard from './CategoryCard';

const Category = () => {
    const [categories, setCategories ] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(res => res.json())
        .then(data => setCategories(data));
    },[])
    return (
        <div>
            <h2 className='text-2xl my-5'>Browse Items By Category </h2>
          
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          
                <> {categories.map(category => <p key={category.car_category_id}>
                        <Link to={`/category/${category.car_category_id}`}>
                        <CategoryCard category={category}></CategoryCard>
                        </Link>
                </p>)} 

                </>

            </div>

        
        </div>
    );
};

export default Category;