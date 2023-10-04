import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { name } = category;

    return (

        <div className='my-4 '>
            <Link className='text-[#9F9F9F] text-2xl '>{name}</Link>
        </div>

    );
};

export default Category;