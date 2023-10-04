import React, { useEffect, useState } from 'react';
import Category from '../../pages/Home/Category';
import News from '../../pages/Home/News';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    const [newses, setNewses] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
            .then(data => setNewses(data)

                // console.log(data)
            )

    }, [])

    return (
        <div className='p-4'>
            <h2 className='text-2xl'>All Category{newses.length}</h2>
            <div>
                <h2 className="bg-gray-300 my-3 btn w-full">National News</h2>
                {
                    categories.map(category => <Category key={category.id} category={category}></Category>)
                }
                {
                    newses.map(news => <News key={news._id} news={news}></News>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;