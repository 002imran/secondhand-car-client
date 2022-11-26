import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal'
import ItemCard from './ItemCard';

const CategoryItem = () => {
    const categoryItem = useLoaderData();
    console.log(categoryItem);
    const [bookCar, setBookCar] = useState(null);
    
   
    return (
       <section>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-9'>
                {/* <h2>This is category: {categoryItem.length}</h2> */}
                {
                    categoryItem.map(cars => <ItemCard
                        key={cars._id}
                        cars={cars}
                        setBookCar={setBookCar}
                    >

                    </ItemCard>)
                }
            </div>
           {
                bookCar &&
                <BookingModal
                    bookCar={bookCar}
                ></BookingModal>
           }
            
       </section>
    );
};

export default CategoryItem;