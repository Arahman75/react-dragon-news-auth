import React from 'react';

const News = ({ news }) => {
    const { name, author, thumbnail_url } = news;
    console.log(news.author);
    return (
        <div>
            <img src={thumbnail_url} alt="" />
            <h2>This isnew{name}</h2>
        </div>
    );
};

export default News;