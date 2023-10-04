import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ aNews }) => {
    const { title, image_url, details, _id
    } = aNews;
    // console.log(aNews);
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <img src={image_url
                } alt="Shoes" />
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    {
                        details.length > 200 ? <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className='text-blue-700 font-bold'>Read more....</Link></p> : <p>{details}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default NewsCard;