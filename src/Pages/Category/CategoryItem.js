
import { useLoaderData } from 'react-router-dom';

const CategoryItem = () => {
    const categoryItem = useLoaderData();
    console.log(categoryItem);

   
    return (
        <div>
            <h2>This is category: {categoryItem.length}</h2>
        </div>
    );
};

export default CategoryItem;