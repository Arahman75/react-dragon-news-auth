import React, { useEffect, useState } from 'react';
import Category from '../../pages/Home/Category';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);


    return (
        <div className='p-4'>
            <h2 className='text-2xl'>All Category</h2>
            <div>
                <h2 className="bg-gray-300 my-3 btn w-full">National News</h2>
                {
                    categories.map(category => <Category key={category.id} category={category}></Category>)
                }

            </div>
        </div>
    );
};

export default LeftSideNav;