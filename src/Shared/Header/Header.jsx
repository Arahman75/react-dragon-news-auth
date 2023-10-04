import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='my-12 text-center'>
            <img className='mx-auto' src={logo} alt="" />
            <p className='py-2'>Journalism Without Fear or Favour</p>
            <p className='text-2xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;